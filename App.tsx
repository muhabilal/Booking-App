import React from 'react';
import {NativeBaseProvider, Stack} from 'native-base';
import Theme from './Themes/Theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Booking from './screens/Booking';
import Index from './Index';
import Home from './screens/Home';
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
