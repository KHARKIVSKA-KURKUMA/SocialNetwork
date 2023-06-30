import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PostsScreen } from "../Post/PostsScreen";
import { ProfileScreen } from "../Profile/ProfileScreen";
import { CreatePostsScreen } from "../CreatePosts/CreatePostsScreen";
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export const Home = () => {
  const Tabs = createBottomTabNavigator();
  const navigation = useNavigation();
  const [showTabBar, setShowTabBar] = useState(true);
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingBottom: 10,
          height: 53,
        },
      })}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          tabBarIcon: () => {
            return (
              <IconButton
                icon={(props) => <Icon name="grid" {...props} />}
                onPress={() => {
                  navigation.navigate("PostsScreen");
                  setShowTabBar(true);
                }}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          tabBarStyle: {
            display: showTabBar ? null : "none",
          },
          tabBarIcon: () => {
            return (
              <IconButton
                style={{
                  position: "absolute",
                  top: -28,
                  width: 70,
                  height: 70,
                  borderRadius: 40,
                  alignSelf: "center",
                  backgroundColor: "#fdc886",
                }}
                icon={(props) => <Icon name="plus" {...props} />}
                onPress={() => {
                  navigation.navigate("CreatePostsScreen");
                  setShowTabBar(false);
                }}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarStyle: {
            display: showTabBar ? null : "none",
          },
          tabBarIcon: () => {
            return (
              <IconButton
                icon={(props) => <Icon name="account" {...props} />}
                onPress={() => {
                  navigation.navigate("ProfileScreen");
                  setShowTabBar(false);
                }}
              />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};
