import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import SplashStack from './src/Navigation/SplashStack';
import MainStack from './src/Navigation/MainStack';

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
      
        <Stack.Screen
          name="MainStack"
          component={MainStack}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>
   
    {/* <View style={{flex: 1}}>
      <WebView source={{uri: 'https://uat.royalmega.com/'}} style={{flex: 1}} />
    </View> */}
    </NavigationContainer>
    // <SafeAreaProvider>
  );
};

export default App;
