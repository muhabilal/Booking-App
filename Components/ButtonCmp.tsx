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
          bg_color == 'primary.10'
            ? 'singletons'
            : bg_color == 'light.100'
            ? 'black'
            : 'primary.10'
        }>
        {text}
      </Text>
    </Pressable>
  );
};

export default ButtonCmp;
