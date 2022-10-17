import React from 'react';
import {Box, Pressable, Button} from 'native-base';
const ButtonCmp = (props: any) => {
  const text = props.btnText;

  return (
    <Button bg={'#32B768'} isHovered={false} w={246}>
      {text}
    </Button>
  );
  // <Button bg={'green.400'}>{text}</Button>;
};

export default ButtonCmp;
