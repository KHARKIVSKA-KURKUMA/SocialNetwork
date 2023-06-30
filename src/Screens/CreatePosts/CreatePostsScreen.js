import { View } from "react-native";
import { Text } from "react-native";
import { IconButton, Stack, TextInput } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { styles } from "./CreatePostsScreen.styled";
import { useEffect, useState } from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import { useDispatch } from "react-redux";
import { setPostsData } from "../../store/selectors";

export const CreatePostsScreen = () => {
  const navigation = useNavigation();
  const [picture, setPicture] = useState(null);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState(null);
  const [cameraPermission, setHasCameraPermission] = useState(null);
  const [locationPermission, setHasLocationPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState(null);
  const dispatch = useDispatch();
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    (async () => {
      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus === "granted");
      const { status: locationStatus } =
        await Location.requestForegroundPermissionsAsync();
      setHasLocationPermission(locationStatus === "granted");
    })();
  }, []);

  /* -------------------------------------------------------------------------- */
  const handleSubmit = async () => {
    const position = await Location.getCurrentPositionAsync();
    const image = { photo: picture };
    if (locationPermission) {
      const data = {
        image,
        title,
        location,
        coords: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
      };
      dispatch(setPostsData({ hi: "he" }));
      console.log("data :>> ", data);
      navigation.navigate("PostsScreen");
    } else {
      const image = { photo: picture };
      const data = {
        title,
        image,
        location,
      };
      console.log("data :>> ", data);
      navigation.navigate("PostsScreen");
    }
    cleanForm();
  };
  /* -------------------------------------------------------------------------- */
  const takePicture = async () => {
    const { uri } = await camera.takePictureAsync({
      width: 640,
      height: 480,
    });
    setPicture(uri);
    if (locationPermission) {
      const position = await Location.getCurrentPositionAsync();
      const place = await Location.reverseGeocodeAsync({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      setLocation(`${place[0].region}, ${place[0].country}`);
    }
  };

  /* -------------------------------------------------------------------------- */
  const cleanForm = () => {
    setPicture(null);
    setTitle(null);
    setLocation(null);
  };
  /* -------------------------------------------------------------------------- */
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <IconButton
            icon={(props) => <Icon name="arrow-left" {...props} />}
            onPress={() => navigation.navigate("PostsScreen")}
          />
        </View>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Create publication</Text>
        </View>
        <View style={styles.headerRight}></View>
      </View>
      <View style={styles.mainContext}>
        <View style={styles.imageContainer}>
          {cameraPermission && (
            <Camera style={{ ...styles.imageContainer }} ref={setCamera}>
              {picture && (
                <Image style={styles.image} source={{ uri: picture }} />
              )}
              <IconButton
                style={styles.iconBtn}
                color="#BDBDBD"
                icon={(props) => (
                  <Icon
                    name="camera"
                    size={24}
                    {...props}
                    onPress={() => takePicture()}
                  />
                )}
              />
            </Camera>
          )}
        </View>
        <Text style={styles.text}>{picture ? "Edit" : "Upload a photo"}</Text>
        <Stack style={{ gap: 5 }}>
          <TextInput
            variant="standard"
            label="Title"
            style={{ margin: 16 }}
            value={title}
            onChangeText={(value) => setTitle(value)}
          />
          <TextInput
            variant="standard"
            label="Locality..."
            leading={(props) => <Icon name="map" {...props} />}
            style={{ margin: 16 }}
            value={location}
            onChangeText={(value) => setLocation(value)}
          />
        </Stack>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFFFFF",
          paddingBottom: 20,
        }}
      >
        <TouchableOpacity
          style={[
            styles.postBtn,
            title !== "" ? styles.postBtnEnabled : styles.postBtnDisabled,
          ]}
          onPress={handleSubmit}
          activeOpacity={1}
          disabled={title !== "" ? false : true}
        >
          <Text style={styles.btnText}>Post</Text>
        </TouchableOpacity>
        <IconButton
          style={styles.deleteBtn}
          color="#BDBDBD"
          icon={(props) => (
            <Icon name="delete" {...props} onPress={cleanForm} />
          )}
        />
      </View>
    </View>
  );
};
