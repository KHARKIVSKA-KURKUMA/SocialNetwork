import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "./App.styled";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen";
import { LoginScreen } from "./src/Screens/LoginScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "LexendPeta-Regular": require("./assets/fonts/LexendPeta-Regular.ttf"),
    "LexendPeta-Bold": require("./assets/fonts/LexendPeta-Bold.ttf"),
    "LexendPeta-Medium": require("./assets/fonts/LexendPeta-Medium.ttf"),
    "LexendPeta-ExtraBold": require("./assets/fonts/LexendPeta-ExtraBold.ttf"),
  });
  return (
    <View style={styles.container}>
      {/* <RegistrationScreen /> */}
      <LoginScreen />
      <StatusBar style="auto" />
    </View>
  );
}
