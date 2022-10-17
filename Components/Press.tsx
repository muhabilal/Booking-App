import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'native-base';

const Press = (props: any) => {
  const text = props.txt;
  return (
    <Button size="sm" variant="link" _text={{color: '#32B768'}}>
      {text}
    </Button>
  );
};

export default Press;
