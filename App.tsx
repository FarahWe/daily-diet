import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme/theme";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";
import { Loading } from "@components/Loading";
import { Home } from "@screens/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [fontLoaded] = useFonts({
    "NunitoSans-Bold": require("./assets/fonts/NunitoSans-Bold.ttf"),
    "NunitoSans-Regular": require("./assets/fonts/NunitoSans-Regular.ttf"),
  });

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        {fontLoaded ? <Home /> : <Loading />}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
