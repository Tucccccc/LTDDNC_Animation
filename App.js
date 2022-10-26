import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './Screen/Screen1';
import Screen2 from './Screen/Screen2';
import Screen3 from './Screen/Screen3';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Screen1} />
        <Stack.Screen name="Option" component={Screen2} />
        <Stack.Screen name="Option1" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}