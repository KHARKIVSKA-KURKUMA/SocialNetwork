import { View } from "react-native";
import { styles } from "./PostsScreen.styled";
import { Text } from "react-native";
import { Avatar, IconButton } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export const PostsScreen = () => {
  const navigation = useNavigation();
  /* -------------------------------------------------------------------------- */
  const handleLogout = () => {
    navigation.navigate("SignIn");
  };
  /* -------------------------------------------------------------------------- */
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}></View>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Publication</Text>
        </View>
        <View style={styles.headerRight}>
          <IconButton
            icon={(props) => <Icon name="logout" {...props} />}
            color="red"
            onPress={() => handleLogout()}
          />
        </View>
      </View>
      <View style={styles.mainContext}>
        <View style={styles.userWrap}>
          <View style={styles.userPhotoWrap}>
            <Avatar
              image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }}
            />
          </View>
          <View style={styles.infoWrap}>
            <Text style={styles.name}>Yehor Yarmoliuk</Text>
            <Text style={styles.email}>y.yarmoliuk@gmail.com</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
