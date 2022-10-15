import React from 'react';
import {NativeBaseProvider} from 'native-base';
import First from './screens/Splash';
import ButtonCmp from './Components/ButtonCmp';
const App = () => {
  return (
    <NativeBaseProvider>
      <First />
      {/* <ButtonCmp /> */}
    </NativeBaseProvider>
  );
};
export default App;
