import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme/theme";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";
import { Loading } from "@components/Loading";
import { Routes } from "@routes/index";

export default function App() {
  const [fontLoaded] = useFonts({
    "NunitoSans-Bold": require("./assets/fonts/NunitoSans-Bold.ttf"),
    "NunitoSans-Regular": require("./assets/fonts/NunitoSans-Regular.ttf"),
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      {fontLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
