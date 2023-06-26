import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "./App.styled";
import { RegistrationScreen } from "../Screens/RegistrationScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    Regular: require("../../assets/fonts/LexendPeta-Regular.ttf"),
    Bold: require("../../assets/fonts/LexendPeta-Bold.ttf"),
    Medium: require("../../assets/fonts/LexendPeta-Medium.ttf"),
    ExtraBold: require("../../assets/fonts/LexendPeta-ExtraBold.ttf"),
  });
  return (
    <View style={styles.container}>
      <RegistrationScreen />
      <StatusBar style="auto" />
    </View>
  );
}
