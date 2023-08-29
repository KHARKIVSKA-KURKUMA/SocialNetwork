import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { db } from "../../config";
import { collection, getDocs } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { addComment } from "../redux/slices/commentSlice";
import { styles } from "./styles/CommentsScreen.styled";
import { useUser } from "../UserContext";

const CommentsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [focusedInput, setFocusedInput] = useState(null);
  const [comment, setComment] = useState("");
  const [postItem, setPostItem] = useState(null);
  const [isCommentEntered, setIsCommentEntered] = useState(false);
  const route = useRoute();
  const { postId } = route.params;
  const { userId } = useUser();

  /* -------------------------------------------------------------------------- */
  const getDataFromFirestore = async () => {
    try {
      const snapshot = await getDocs(collection(db, "users", userId, "posts"));
      const post = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
        .filter((docData) => docData.id === postId);
      setPostItem(post[0]);
      return post;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    getDataFromFirestore();
  }, []);
  /* -------------------------------------------------------------------------- */
  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleDateString("uk-UA", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })} | ${currentDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
  /* -------------------------------------------------------------------------- */
  const hanlePostComment = () => {
    const trimmedComment = comment.trim();
    if (isCommentEntered && trimmedComment !== "") {
      setComment(trimmedComment);
      dispatch(
        addComment({ userId, postId, comment: trimmedComment, formattedDate })
      );
      setComment("");
      setTimeout(() => {
        getDataFromFirestore();
      }, 1000);
    }
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
            <Text style={styles.titleContainerText}>Коментарі</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          {postItem && (
            <Image
              style={styles.imageItem}
              source={{ uri: postItem.data.previewImage }}
              resizeMode="cover"
            />
          )}
        </View>
        <ScrollView style={styles.scrollContent}>
          <View style={styles.mainContent}>
            <View style={styles.publicationContainer}>
              <View style={styles.commentsContainer}>
                {postItem &&
                  postItem.data.comments.map((comment, index) => (
                    <View
                      style={[
                        styles.commentItem,
                        index % 2 === 0 ? styles.commentItemReverse : null,
                      ]}
                      key={index}
                    >
                      <Image
                        style={styles.commentAvatar}
                        source={require("../images/avatar-blank.jpg")}
                      />
                      <View
                        style={[
                          styles.comment,
                          index % 2 === 0 ? styles.commentReverse : null,
                        ]}
                      >
                        <Text style={styles.commentText}>
                          {comment.comment}
                        </Text>
                        <Text style={styles.commentDate}>{comment.date}</Text>
                      </View>
                    </View>
                  ))}
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.formContainer}>
          <TextInput
            style={[
              [styles.input],
              focusedInput === "comment" && [styles.inputFocused],
            ]}
            placeholderTextColor={"#BDBDBD"}
            placeholder="Коментувати..."
            name="comment"
            value={comment}
            onChangeText={(text) => {
              setComment(text);
              setIsCommentEntered(text.trim() !== "");
            }}
            onFocus={() => setFocusedInput("comment")}
            onBlur={() => setFocusedInput(null)}
          />
          <TouchableOpacity
            style={styles.buttonPost}
            onPress={hanlePostComment}
            disabled={!isCommentEntered || comment.trim() === ""}
          >
            <Image
              style={styles.buttonPostIcon}
              source={require("../images/arrow-up.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CommentsScreen;
