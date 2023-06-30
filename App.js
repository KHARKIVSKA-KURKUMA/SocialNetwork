import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import MainNav from "./src/components/MainNav";

export default function App() {
  const [fontsLoaded] = useFonts({
    "LexendPeta-Regular": require("./assets/fonts/LexendPeta-Regular.ttf"),
    "LexendPeta-Bold": require("./assets/fonts/LexendPeta-Bold.ttf"),
    "LexendPeta-Medium": require("./assets/fonts/LexendPeta-Medium.ttf"),
    "LexendPeta-ExtraBold": require("./assets/fonts/LexendPeta-ExtraBold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <MainNav />
    </Provider>
  );
}
