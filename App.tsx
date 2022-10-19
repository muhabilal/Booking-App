import React from 'react';
import First from './screens/Splash';
import ButtonCmp from './Components/ButtonCmp';
import InputsCmp from './Components/InputsCmp';
import Register from './screens/Register';
import Home from './screens/Home';
import Press from './Components/Press';
import {NativeBaseProvider, Stack} from 'native-base';
import Theme from './Themes/Theme';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Index from './Index';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NativeBaseProvider theme={Theme}>
      <Index />
    </NativeBaseProvider>
  );
};
export default App;
