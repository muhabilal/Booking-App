import React from 'react';
import First from './screens/Splash';
import ButtonCmp from './Components/ButtonCmp';
import InputsCmp from './Components/InputsCmp';
import Register from './screens/Register';
import Home from './screens/Home';
import Press from './Components/Press';
import {NativeBaseProvider} from 'native-base';
const App = () => {
  return (
    <NativeBaseProvider>
      <Home />
      {/* <First /> */}
      {/* <ButtonCmp /> */}
      {/* <InputsCmp /> */}
      {/* <Register /> */}
      {/* <Press /> */}
    </NativeBaseProvider>
  );
};
export default App;
