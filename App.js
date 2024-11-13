import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/Navigation/MainStack';
import SplashStack from './src/Navigation/SplashStack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const App = () => {
  return (
        // <SafeAreaProvider>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashStack">
        <Stack.Screen
          name="SplashStack"
          component={SplashStack}
          options={{
            headerShown: false,
          }}

          
        />
        {/* <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen
          name="MainStack"
          component={MainStack}
          options={{
            headerShown: false,
          }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
        // <SafeAreaProvider>

  );
};

export default App;
