import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'native-base';

const Press = (props: any) => {
  const text = props.txt;
  const PaddingLeft = props.padding_left;
  const PaddingRight = props.padding_right;
  return (
    <Button
      pl={PaddingLeft}
      pr={PaddingRight}
      size="lg"
      variant="link"
      _text={{color: 'primary'}}>
      {text}
    </Button>
  );
};

export default Press;
