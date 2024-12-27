import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

import Home from './app/screens/Home';
import Create from './app/screens/Create';
import Explore from './app/screens/Explore';
import Config from './app/screens/Config';
import Event from './app/screens/Event';

import { store } from './app/server/store'
import Container from './Container';

const persistor = persistStore(store)

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

function BottomTabsNavigator() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Create" component={Create} />
      <Tabs.Screen name="Explore" component={Explore} />
      <Tabs.Screen name="Config" component={Config} />
    </Tabs.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Event" component={Event} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <Container>
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <StatusBar style="auto" />
            <Stack.Navigator>
              <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
              <Stack.Screen name="Tabs" component={BottomTabsNavigator} options={{ headerShown: false }} />
            </Stack.Navigator>
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </Container>
  );
}
