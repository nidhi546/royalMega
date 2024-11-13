import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../Screens/HomeScreen';


const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      
    </Stack.Navigator>
  );
};

export default MainStack;