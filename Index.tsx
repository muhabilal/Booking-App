import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import First from './screens/Splash';
import Register from './screens/Register';

const Index = () => {
  const Stack = createNativeStackNavigator();
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="First" component={First} />
    //     <Stack.Screen name="Register" component={Register} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Register />
    // <First />
  );
};

export default Index;
