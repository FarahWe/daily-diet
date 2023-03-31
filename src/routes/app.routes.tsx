import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { NewMeal } from "@screens/NewMeal";
import { Summary } from "@screens/Summary";

const { Screen, Navigator } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />

      <Screen name="summary" component={Summary} />

      <Screen name="newMeal" component={NewMeal} />
    </Navigator>
  );
}
