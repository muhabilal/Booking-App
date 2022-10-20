import React from 'react';
import {NativeBaseProvider, Stack} from 'native-base';
import Theme from './Themes/Theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Booking from './screens/Booking';
import Index from './Index';
import Home from './screens/Home';
import First from './screens/Splash';
import Register from './screens/Register';
import ForgetPassword from './screens/ForgetPassword';
import Details from './screens/Details';
import Login from './screens/Login';
import CreateAccount from './screens/CreateAccount';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NativeBaseProvider theme={Theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="First" component={First} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Booking" component={Booking} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;
