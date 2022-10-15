import React from 'react';
import {NativeBaseProvider} from 'native-base';
import First from './screens/First';
const App = () => {
  return (
    <NativeBaseProvider>
      <First />
    </NativeBaseProvider>
  );
};
export default App;
