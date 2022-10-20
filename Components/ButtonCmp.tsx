import React from 'react';
import {Pressable, Text} from 'native-base';
const ButtonCmp = (props: any) => {
  const text = props.btnText;
  const bg_color = props.background;
  const onClick = props.press;
  return (
    <Pressable
      w={256}
      h={60}
      bg={bg_color}
      borderRadius="2xl"
      justifyContent={'center'}
      onPress={onClick}>
      <Text
        textAlign={'center'}
        color={
          bg_color == 'primary'
            ? 'singletons'
            : bg_color == 'light.100'
            ? 'black'
            : 'primary'
        }>
        {text}
      </Text>
    </Pressable>
    // </Box>
  );
};

export default ButtonCmp;
