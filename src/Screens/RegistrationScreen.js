import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "./RegistrationScreen.styled";
import {
  Avatar,
  IconButton,
  Stack,
  TextInput,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import BgImage from "../images/backgroundSignUp.png";
export const RegistrationScreen = () => {
  return (
    <View style={styles.Container}>
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
            />
            <TextInput
              style={{ width: 345, height: 50 }}
              label="Email"
              leading={(props) => <Icon name="email" {...props} />}
            />
            <TextInput
              style={{ width: 345, height: 50 }}
              label="Password"
              secureTextEntry={true}
              leading={(props) => <Icon name="key" {...props} />}
              trailing={(props) => (
                <IconButton
                  icon={(props) => <Icon name="eye" {...props} />}
                  {...props}
                />
              )}
            />
          </Stack>
          <TouchableOpacity style={styles.signUpBtn}>
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.SignInWrap}>
            <Text style={styles.decr}> Already registered?</Text>
            <Text style={styles.loginLink}>Sign In</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
