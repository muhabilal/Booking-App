import React from 'react';
import {NativeBaseProvider} from 'native-base';
import First from './screens/Splash';
import ButtonCmp from './Components/ButtonCmp';
import InputsCmp from './Components/InputsCmp';
import Register from './screens/Register';
import Home from './screens/Home';
const App = () => {

  return (
    <NativeBaseProvider>
      <Home/>
      {/* <First /> */}
      {/* <ButtonCmp /> */}
      {/* <InputsCmp /> */}
      {/* <Register /> */}
    </NativeBaseProvider>
  );
};
export default App;
