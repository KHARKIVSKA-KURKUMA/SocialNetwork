import { View } from "react-native";
import { Text } from "react-native";
import { IconButton, Stack, TextInput } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { styles } from "./CreatePostsScreen.styled";
import { useState } from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const CreatePostsScreen = () => {
  const navigation = useNavigation();
  const [picture, setPicture] = useState(null);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState(null);
  /* -------------------------------------------------------------------------- */
  const handleSubmit = () => {
    cleanForm();
  };
  /* -------------------------------------------------------------------------- */
  const cleanForm = () => {
    setTitle("");
    setLocation(null);
    setPicture(null);
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
          <Image
            style={styles.image}
            source={{ uri: "https://mui.com/static/images/avatar/1.jpg" }}
          />

          <IconButton
            style={styles.iconBtn}
            color="#BDBDBD"
            icon={(props) => <Icon name="camera" size={24} {...props} />}
          />
        </View>
        <Text style={styles.text}>Upload a photo</Text>
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
          icon={(props) => <Icon name="delete" {...props} />}
        />
      </View>
    </View>
  );
};
