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
import Booking from './screens/Booking';
import Index from './Index';
import Details from './screens/Details';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NativeBaseProvider theme={Theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Booking" component={Booking} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;
