import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import { styles } from "./RegistrationScreen.styled";
import {
  Avatar,
  IconButton,
  Stack,
  TextInput,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import BgImage from "../images/backgroundSignUp.png";
import { useState } from "react";
export const RegistrationScreen = () => {
  /* -------------------------------------------------------------------------- */
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const behavior = Platform.OS === "android" ? "padding" : "height";
  /* -------------------------------------------------------------------------- */
  const handleFormSubmit = () => {
    const user = {
      login,
      email,
      password,
    };
    console.log("user :>> ", user);
    cleanForm();
  };
  /* -------------------------------------------------------------------------- */
  const cleanForm = () => {
    setLogin("");
    setEmail("");
    setPassword("");
  };

  /* -------------------------------------------------------------------------- */
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  /* -------------------------------------------------------------------------- */
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.Container} onPress={dismissKeyboard}>
        <ImageBackground source={BgImage} style={styles.background}>
          <View style={styles.ContentWrap}>
            <Stack spacing={2} style={styles.inputWrap}>
              <View style={styles.avatarContainer}>
                <View style={styles.avatarWrap}>
                  <Avatar
                    style={styles.avatar}
                    icon={(props) => <Icon name="account" {...props} />}
                  />
                  <IconButton
                    style={styles.plusBtn}
                    icon={(props) => (
                      <Icon name="plus" style={{ fontSize: 25 }} {...props} />
                    )}
                    color="#FF6C00"
                  />
                </View>
              </View>
              <Text style={styles.title}>Register</Text>
              <TextInput
                style={{ width: 345, height: 50 }}
                label="Login"
                leading={(props) => <Icon name="account" {...props} />}
                value={login}
                onChangeText={(value) => setLogin(value)}
              />
              <TextInput
                style={{ width: 345, height: 50 }}
                label="Email"
                leading={(props) => <Icon name="email" {...props} />}
                value={email}
                onChangeText={(value) => setEmail(value)}
              />
              <TextInput
                style={{ width: 345, height: 50 }}
                label="Password"
                secureTextEntry={hiddenPassword}
                leading={(props) => <Icon name="key" {...props} />}
                trailing={(props) => (
                  <IconButton
                    icon={(props) => (
                      <Icon
                        name={hiddenPassword ? "eye" : "eye-off"}
                        {...props}
                        onPress={() =>
                          setHiddenPassword((prevState) => !prevState)
                        }
                      />
                    )}
                  />
                )}
                value={password}
                onChangeText={(value) => setPassword(value)}
              />
            </Stack>
            <TouchableOpacity
              style={styles.signUpBtn}
              onPress={handleFormSubmit}
              activeOpacity={0.8}
              disabled={
                email !== "" && password !== "" && login !== "" ? false : true
              }
            >
              <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.SignInWrap}>
              <Text style={styles.decr}> Already registered?</Text>
              <Text style={styles.loginLink}>Sign In</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
