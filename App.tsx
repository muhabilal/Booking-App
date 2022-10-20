import React from 'react';
import {NativeBaseProvider, Stack} from 'native-base';
import Theme from './Themes/Theme';
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
