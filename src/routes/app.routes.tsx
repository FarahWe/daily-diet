import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/Home";

const { Screen, Navigator } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
    </Navigator>
  );
}
