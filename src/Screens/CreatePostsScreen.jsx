import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";

import { useDispatch } from "react-redux";
import { addPost } from "../redux/slices/postsSlice";
import { styles } from "./styles/CreatePostsScreen.styled";
import { useUser } from "../UserContext";

const CreatePostsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [type, setType] = useState(CameraType.back);
  const [focusedInput, setFocusedInput] = useState(false);
  const [title, setTitle] = useState("");
  const [locationText, setLocationText] = useState("");
  const { userId } = useUser();
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
    })();
  }, []);
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    setIsFormValid(previewImage && title && locationText);
  }, [previewImage, title, locationText]);
  /* -------------------------------------------------------------------------- */
  const pablishPost = () => {
    if (isFormValid) {
      setPreviewImage(previewImage);
      setTitle(title);
      setLocationText(locationText);
      setLocation(location);
      dispatch(
        addPost({ userId, previewImage, title, locationText, location })
      );
      setTimeout(() => {
        navigation.navigate("Home");
      }, 1000);
    }
  };
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    (async () => {
      try {
        const { status } = await Camera.requestPermissionsAsync();
        await MediaLibrary.requestPermissionsAsync();

        setHasPermission(status === "granted");
      } catch (error) {
        console.log("Error requesting permissions:", error);
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  /* -------------------------------------------------------------------------- */
  const takePicture = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);

      const { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }
      const locationData = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = locationData.coords;
      setLocation({ latitude, longitude });
      setPreviewImage(uri);
    }
  };
  /* -------------------------------------------------------------------------- */
  const deletePreviewImage = () => {
    setPreviewImage(null);
    setLocation({ latitude: null, longitude: null });
  };
  /* --------------------------------- RENDER --------------------------------- */
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.page}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.buttonReturn}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={styles.iconReturn}
              source={require("../images/arrow-return.png")}
            />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.titleContainerText}>Створити публікацію</Text>
          </View>
        </View>
        <View style={styles.mainContent}>
          <View style={styles.publicationContainer}>
            <View style={styles.imageContainer}>
              <Camera
                style={styles.camera}
                type={type}
                ratio={"1:1"}
                ref={setCameraRef}
              >
                <View style={styles.photoView}>
                  <TouchableOpacity
                    style={styles.cameraButton}
                    onPress={takePicture}
                  >
                    <View style={styles.cameraButtonIcon}>
                      <Image
                        style={styles.cameraImage}
                        source={require("../images/camera-white.png")}
                      />
                    </View>
                  </TouchableOpacity>
                  {previewImage && (
                    <Image
                      style={styles.previewImageThmb}
                      source={{ uri: previewImage }}
                    />
                  )}
                  <TouchableOpacity
                    style={styles.cameraRotate}
                    onPress={() => {
                      setType(
                        type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back
                      );
                    }}
                  ></TouchableOpacity>
                </View>
              </Camera>
            </View>
            <TouchableOpacity onPress={deletePreviewImage}>
              <Text style={styles.text}>
                {previewImage ? "Редагувати фото" : "Завантажте фото"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputHolder}>
            <TextInput
              style={[
                [styles.input],
                focusedInput === "title" && [styles.inputFocused],
              ]}
              name="title"
              value={title}
              placeholder="Назва..."
              onChangeText={(text) => {
                setTitle(text);
              }}
              onFocus={() => setFocusedInput(true)}
              onBlur={() => setFocusedInput(false)}
            />
          </View>
          <View style={styles.inputHolder}>
            <Image
              style={styles.mapImage}
              source={require("../images/map.png")}
            />
            <TextInput
              style={[
                [styles.inputMap],
                focusedInput === "location" && [styles.inputFocused],
              ]}
              name="location"
              value={location}
              placeholder="Місцевість"
              onChangeText={(text) => {
                setLocationText(text);
              }}
              onFocus={() => setFocusedInput(true)}
              onBlur={() => setFocusedInput(false)}
            />
          </View>
          <TouchableOpacity
            style={[styles.button, isFormValid && styles.buttonValid]}
            onPress={pablishPost}
            disabled={!isFormValid}
          >
            <Text
              style={[styles.buttonText, isFormValid && styles.buttonTextValid]}
            >
              Опублікувати
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerButtonDel}>
          <TouchableOpacity
            style={styles.buttonDel}
            onPress={deletePreviewImage}
          >
            <Image
              style={styles.buttonDelIcon}
              source={require("../images/trash.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;
