import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CreateAccount from './screens/CreateAccount';
import Login from './screens/Login';
const Tab = createMaterialTopTabNavigator();
export default function TopNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="CreateAccount" component={CreateAccount} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
}
