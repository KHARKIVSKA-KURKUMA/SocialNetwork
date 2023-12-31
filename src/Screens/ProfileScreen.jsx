import {
  Keyboard,
  ImageBackground,
  Image,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { auth, db } from "../../config";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";

import { signOut, onAuthStateChanged } from "firebase/auth";
import { styles } from "./styles/ProfileScreen.styled";
import { useUser } from "../UserContext";

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { userId } = useUser();
  const [posts, setPosts] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const user = auth.currentUser;
        setUserData(user);
      }
    });
  }, []);

  useEffect(() => {
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
        console.log(error);
        throw error;
      }
    };

    getDataFromFirestore();
  }, []);

  const addImage = (e) => {
    e.preventDefault();
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUserData([]);
    navigation.navigate("Login");
  };

  const handleLikes = async (postId, postIndex) => {
    try {
      const updatedPosts = [...posts];
      const currentLikes = updatedPosts[postIndex].data.likes;
      const updatedLikes = currentLikes + 1;

      const docRef = doc(collection(db, "users", userId, "posts"), postId);
      await updateDoc(docRef, {
        likes: updatedLikes,
      });

      updatedPosts[postIndex].data.likes = updatedLikes;
      setPosts(updatedPosts);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.page}>
        <ImageBackground
          source={require("../images/bg-app.jpg")}
          style={styles.imageBackground}
          imageStyle={{
            minHeight: 812,
          }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={styles.container}
          >
            <View>
              <TouchableOpacity
                style={styles.buttonLogOut}
                onPress={handleLogout}
              >
                <Image
                  style={styles.iconLogOut}
                  source={require("../images/log-out.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.avatar}>
              <Image
                style={styles.avatarImage}
                source={require("../images/avatar.jpg")}
              />
              <TouchableOpacity style={styles.buttonAdd} onPress={addImage}>
                <Image
                  style={styles.buttonAddIcon}
                  source={require("../images/added.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.nameTitle}>
                {userData.displayName && userData.displayName}
              </Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContent}>
              {posts && (
                <View style={styles.posts}>
                  {posts.map((postItem, index) => (
                    <View key={postItem.id} style={styles.post}>
                      <TouchableOpacity
                        style={styles.postImageLink}
                        onPress={() =>
                          navigation.navigate("Comments", {
                            postId: postItem.id,
                          })
                        }
                      >
                        <Image
                          style={styles.postImage}
                          source={{ uri: postItem.data.previewImage }}
                        />
                      </TouchableOpacity>
                      <View style={styles.postContent}>
                        <Text style={styles.postTitle}>
                          {postItem.data.title}
                        </Text>
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
                          <TouchableOpacity
                            onPress={() => handleLikes(postItem.id, index)}
                            style={styles.postLikes}
                          >
                            <Image
                              style={styles.postIcon}
                              source={require("../images/like.png")}
                            />
                            <Text style={styles.postCount}>
                              {postItem.data.likes}
                            </Text>
                          </TouchableOpacity>

                          <View style={styles.postLocationInfo}>
                            <Image
                              style={styles.postIcon}
                              source={require("../images/map.png")}
                            />
                            <TouchableOpacity
                              onPress={() =>
                                navigation.navigate("Map", {
                                  postId: postItem.id,
                                })
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
            </ScrollView>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProfileScreen;
