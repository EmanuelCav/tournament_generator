import { StatusBar } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import Home from './app/screens/Home'
import Container from "./Container";

const Tab = createBottomTabNavigator()

import { store } from './app/server/store'

const persistor = persistStore(store)

export default function App() {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent'
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar backgroundColor={'#33cc33'} />
          <Container>
            <Tab.Navigator>
              <Tab.Screen name="Home" component={Home} />
            </Tab.Navigator>
          </Container>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
