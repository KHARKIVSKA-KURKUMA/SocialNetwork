import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useEffect } from "react";

import { db, auth } from "../../config";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { styles } from "./styles/PostsScreen.styled";
import { useUser } from "../UserContext";

const PostsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [userData, setUserData] = useState([]);
  const { userId } = useUser();
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const user = auth.currentUser;
        setUserData(user);
      }
    });
  }, []);
  /* -------------------------------------------------------------------------- */
  useFocusEffect(
    React.useCallback(() => {
      const getDataFromFirestore = async () => {
        try {
          const snapshot = await getDocs(
            collection(db, "users", userId, "posts")
          );
          const postsList = snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }));
          setPosts(postsList);
          return postsList;
        } catch (error) {
          throw error;
        }
      };
      getDataFromFirestore();
    }, [])
  );
  /* -------------------------------------------------------------------------- */
  const handleLogout = async () => {
    await signOut(auth);
    setUserData([]);
    navigation.navigate("Login");
  };
  /* --------------------------------- RENDER --------------------------------- */
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleContainerText}>Публікації</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonLogOut}
          onPress={() => handleLogout()}
        >
          <Image
            style={styles.iconLogOut}
            source={require("../images/log-out.png")}
          />
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.user}>
          <Image
            style={styles.userImage}
            source={require("../images/avatar.jpg")}
          />
          <View>
            <Text style={styles.userName}>
              {userData.displayName && userData.displayName}
            </Text>
            <Text style={styles.userEmail}>{userData.email}</Text>
          </View>
        </View>
      </View>
      <ScrollView style={styles.scrollContent}>
        <View style={styles.v}>
          {posts && (
            <View style={styles.posts}>
              {posts.map((postItem) => (
                <View key={postItem.id} style={styles.post}>
                  <TouchableOpacity
                    style={styles.postImageLink}
                    onPress={() =>
                      navigation.navigate("Comments", { postId: postItem.id })
                    }
                  >
                    <Image
                      style={styles.postImage}
                      source={{ uri: postItem.data.previewImage }}
                    />
                  </TouchableOpacity>
                  <View style={styles.postContent}>
                    <Text style={styles.postTitle}>{postItem.data.title}</Text>
                    <View style={styles.postMeta}>
                      <TouchableOpacity
                        style={styles.postComments}
                        onPress={() =>
                          navigation.navigate("Comments", {
                            postId: postItem.id,
                          })
                        }
                      >
                        <Image
                          style={styles.postIcon}
                          source={
                            postItem.data.comments.length !== 0
                              ? require("../images/comments.png")
                              : require("../images/comments-o.png")
                          }
                        />
                        <Text style={styles.postCount}>
                          {postItem.data.comments.length}
                        </Text>
                      </TouchableOpacity>
                      <View style={styles.postLocationInfo}>
                        <Image
                          style={styles.postIcon}
                          source={require("../images/map.png")}
                        />
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate("Map", { postId: postItem.id })
                          }
                        >
                          <Text style={styles.postLocationAddress}>
                            {postItem.data.locationText}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default PostsScreen;
