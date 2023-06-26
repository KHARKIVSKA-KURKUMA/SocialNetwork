import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "./LoginScreen.styled";
import { IconButton, Stack, TextInput } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import BgImage from "../images/backgroundSignUp.png";

export const LoginScreen = () => {
  return (
    <View style={styles.Container}>
      <ImageBackground source={BgImage} style={styles.background}>
        <View style={styles.ContentWrap}>
          <Stack spacing={2} style={styles.inputWrap}>
            <Text style={styles.title}>Login</Text>
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
          <TouchableOpacity style={styles.signInBtn}>
            <Text style={styles.btnText}>Sign In</Text>
          </TouchableOpacity>
          <View style={styles.SignUpWrap}>
            <Text style={styles.decr}> Have no account?</Text>
            <Text style={styles.loginLink}>Sign Up</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
