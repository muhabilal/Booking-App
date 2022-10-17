import React from 'react';
import {NativeBaseProvider} from 'native-base';
import First from './screens/Splash';
import ButtonCmp from './Components/ButtonCmp';
import InputsCmp from './Components/InputsCmp';
import Register from './screens/Register';
<<<<<<< HEAD
import Home from './screens/Home';
=======
import Press from './Components/Press';
>>>>>>> 53851b0da8b2f393bb3e65c7429099a304d368cc
const App = () => {

  return (
    <NativeBaseProvider>
<<<<<<< HEAD
      <Home/>
=======
>>>>>>> 53851b0da8b2f393bb3e65c7429099a304d368cc
      {/* <First /> */}
      {/* <ButtonCmp /> */}
      {/* <InputsCmp /> */}
      <Register />
      {/* <Press /> */}
    </NativeBaseProvider>
  );
};
export default App;
