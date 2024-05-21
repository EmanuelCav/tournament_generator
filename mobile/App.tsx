import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './app/screen/Home';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  },
};

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar backgroundColor='#5cc197' style='light' translucent={false} />
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} options={{
          animation: 'flip'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}