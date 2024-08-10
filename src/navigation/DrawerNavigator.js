
import 'react-native-gesture-handler';
import * as React from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from '../screens/HomePage';
import CustomDrawerContent from '../components/CustomDrawerContent';
import { SafeAreaView } from 'react-native-safe-area-context';

const Drawer = createDrawerNavigator();


function DrawerNavigator(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Drawer.Navigator
      initialRouteName="HomePage"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Dashboard"
        options={{ drawerLabel: 'Dashboard', headerShown: false }}
        component={HomePage}
      />
      <Drawer.Screen
        name="Upload"
        options={{ drawerLabel: 'Upload', headerShown: false }}
        component={HomePage}
      />
      <Drawer.Screen
        name="Invoice"
        options={{ drawerLabel: 'Invoice', headerShown: false }}
        component={HomePage}
      />
      <Drawer.Screen
        name="Schedule"
        options={{ drawerLabel: 'Schedule', headerShown: false }}
        component={HomePage}
      />
      <Drawer.Screen
        name="Calender"
        options={{ drawerLabel: 'Calender', headerShown: false }}
        component={HomePage}
      />
      <Drawer.Screen
        name="Notification"
        options={{ drawerLabel: 'Notification', headerShown: false }}
        component={HomePage}
      />
      <Drawer.Screen
        name="Settings"
        options={{ drawerLabel: 'Settings', headerShown: false }}
        component={HomePage}
      />
    </Drawer.Navigator>
    </SafeAreaView>
  );
}

export default DrawerNavigator;