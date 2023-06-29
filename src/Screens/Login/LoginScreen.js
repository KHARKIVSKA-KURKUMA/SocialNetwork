import {
  ImageBackground,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  Platform,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { styles } from "./LoginScreen.styled";
import { IconButton, Stack, TextInput } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import BgImage from "../../images/backgroundSignUp.png";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const LoginScreen = () => {
  const navigation = useNavigation();
  /* -------------------------------------------------------------------------- */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const behavior = Platform.OS === "android" ? "padding" : "height";
  /* -------------------------------------------------------------------------- */
  const handleFormSubmit = () => {
    const user = {
      email,
      password,
    };
    navigation.navigate("Home");
    dismissKeyboard();
    cleanForm();
  };
  /* -------------------------------------------------------------------------- */
  const cleanForm = () => {
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
      <View style={styles.container}>
        <ImageBackground style={styles.imageBg} source={BgImage}>
          <KeyboardAvoidingView behavior={behavior} style={styles.form}>
            <Text style={styles.title}>Login</Text>
            <View style={{ ...styles.inputContainer, marginBottom: 16 }}>
              <Stack style={{ gap: 16 }} spacing={2}>
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
            </View>
          </KeyboardAvoidingView>
          <View style={styles.btnContainer}>
            <View style={{ marginBottom: 16, marginTop: 40 }}>
              <TouchableOpacity
                style={styles.signInBtn}
                onPress={handleFormSubmit}
                activeOpacity={0.8}
                disabled={email !== "" && password !== "" ? false : true}
              >
                <Text style={styles.btnText}>Sign In</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUp")}
              style={styles.SignUpWrap}
            >
              <Text style={styles.decr}> Have no account?</Text>
              <Text style={styles.registerLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
