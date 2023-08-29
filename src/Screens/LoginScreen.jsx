import {
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useEffect } from "react";
import { auth } from "../../config";
import { onAuthStateChanged } from "firebase/auth";
import { loginDB } from "../redux/services/userService";
import { styles } from "./styles/LoginScreen.styled";

const LoginScreen = ({ navigation }) => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    setIsFormValid(email !== "" && password !== "");
  }, [email, password]);
  /* -------------------------------------------------------------------------- */
  const showHidePassword = () => {
    setShowPassword(!showPassword);
  };
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Home");
        setEmail("");
        setPassword("");
      }
    });
  }, []);
  /* -------------------------------------------------------------------------- */
  const handleSignIn = async () => {
    if (isFormValid) {
      setEmail(email);
      setPassword(password);
      try {
        await loginDB(email, password);
      } catch (error) {
        console.log("No user in db");
      }
    }
  };
  /* --------------------------------- RENDER --------------------------------- */
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.page}>
        <ImageBackground
          source={require("../images/bg-app.jpg")}
          style={styles.imageBackground}
        >
          <KeyboardAvoidingView
            keyboardVerticalOffset={-100}
            behavior="padding"
            style={styles.container}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.registrationTitle}>Увійти</Text>
            </View>
            <View style={styles.formContainer}>
              <TextInput
                style={[
                  [styles.input],
                  focusedInput === "email" && [styles.inputFocused],
                ]}
                placeholderTextColor={"#BDBDBD"}
                placeholder="Адреса електронної пошти"
                name="email"
                value={email}
                onChangeText={(text) => {
                  setEmail(text.trim());
                }}
                onFocus={() => setFocusedInput("email")}
                onBlur={() => setFocusedInput(null)}
              />
            </View>
            <View style={styles.formContainer}>
              <TextInput
                style={[
                  [styles.input],
                  focusedInput === "password" && [styles.inputFocused],
                ]}
                placeholderTextColor={"#BDBDBD"}
                placeholder="Пароль"
                name="password"
                value={password}
                secureTextEntry={!showPassword}
                onChangeText={(text) => {
                  setPassword(text);
                }}
                onFocus={() => setFocusedInput("password")}
                onBlur={() => setFocusedInput(null)}
              />
              <TouchableOpacity
                style={styles.buttonShow}
                onPress={showHidePassword}
              >
                <Text style={styles.buttonShowText}>
                  {showPassword ? "Приховати" : "Показати"}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleSignIn}
                disabled={!isFormValid}
              >
                <Text style={styles.buttonText}>Увійти</Text>
              </TouchableOpacity>
              <View style={styles.redirection}>
                <Text style={styles.redirectionText}>Немає акаунту?</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Registration")}
                >
                  <Text style={styles.redirectionLink}>Зареєструватися</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default LoginScreen;
