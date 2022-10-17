import React from 'react';
import {Button, extendTheme, NativeBaseProvider} from 'native-base';
const ButtonCmp = (props: any) => {
  const text = props.btnText;
  const theme = extendTheme({
    colors: {
      primary: {
        200: '#32B768',
        _text: {
          color: '#FFFFFF',
        },
      },
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <Button bg={'green.400'}>{text}</Button>
    </NativeBaseProvider>
  );
  // <Button bg={'green.400'}>{text}</Button>;
};

export default ButtonCmp;
