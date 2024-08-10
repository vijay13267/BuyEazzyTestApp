import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../screens/LoginPage';
import DrawerNavigator from './DrawerNavigator';
const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
            name="Login" 
            component={LoginPage} 
            options={{ headerShown: false }} 
        />
        <Stack.Screen 
            name="HomePage" 
            component={DrawerNavigator} 
            options={{ headerShown: false }} 
        />
    </Stack.Navigator>
  );
}

export default Navigation;
