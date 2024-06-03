import React from 'react';
import { StatusBar } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import Icon from 'react-native-vector-icons/Ionicons';
import { Center } from 'native-base';

import Container from "./Container";

import Home from './app/screens/Home'
import Create from './app/screens/Create'
import Join from './app/screens/Join'

import { store } from './app/server/store'

const Tab = createBottomTabNavigator()

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
            <Tab.Navigator screenOptions={{
              headerShown: false
            }}>
              <Tab.Screen name="Home" component={Home} options={{
                title: 'Panel',
                tabBarActiveTintColor: '#33cc33',
                tabBarIcon: ({ size }) => {
                  return (
                    <Icon name='home' color={'#33cc33'} size={size} />
                  );
                },

              }} />
              <Tab.Screen name="Join" component={Join} options={{
                title: 'Join',
                tabBarActiveTintColor: '#33cc33',
                tabBarIcon: ({ size }) => {
                  return (
                    <Icon name='enter' color={'#33cc33'} size={size} />
                  );
                },

              }} />
              <Tab.Screen name="Create" component={Create} options={{
                title: 'Create',
                tabBarActiveTintColor: '#33cc33',
                tabBarIcon: ({ size }) => {
                  return (
                    <Icon name='add-circle' color={'#33cc33'} size={size} />
                  );
                },

              }} />
            </Tab.Navigator>
          </Container>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
