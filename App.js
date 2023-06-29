import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RegistrationScreen } from "./src/Screens/Registration/RegistrationScreen";
import { LoginScreen } from "./src/Screens/Login/LoginScreen";
import Home from "./src/Screens/Home/Home";

export default function App() {
  const MainStack = createStackNavigator();
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
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="SignIn">
        <MainStack.Screen
          name="SignUp"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="SignIn"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
