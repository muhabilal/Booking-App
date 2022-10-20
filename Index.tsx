import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import First from './screens/Splash';
import Register from './screens/Register';
import ForgetPassword from './screens/ForgetPassword';
import OTP from './screens/OTP';
import Login from './screens/Login';
import CreateAccount from './screens/CreateAccount';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TopNavigation from './TopNavigation';
const Index = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        {/* <Stack.Screen name="Tab" component={TopNavigation} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    // <Register />
    // <First />
    // <ForgetPassword />
    // <OTP />
  );
};

export default Index;
