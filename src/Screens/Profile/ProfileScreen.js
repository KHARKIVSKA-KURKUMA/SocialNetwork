import { IconButton, Text } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { styles } from "./ProfileScreen.styled";

export const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <IconButton
            icon={(props) => <Icon name="arrow-left" {...props} />}
            onPress={() => navigation.navigate("PostsScreen")}
          />
        </View>
      </View>
      <Text>Profile</Text>
    </View>
  );
};
