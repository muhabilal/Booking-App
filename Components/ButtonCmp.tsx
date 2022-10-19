import React from 'react';
import {Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';
const ButtonCmp = (props: any) => {
  const text = props.btnText;
  const bg_color = props.background;
  const navigation = useNavigation();
  const onClick = props.click;
  console.log(onClick);
  return (
    <>
      <Button
        w={256}
        h={49}
        bg={bg_color}
        // onPress={() => navigation.navigate('Register')}
        _text={{color: bg_color == 'primary' ? 'white' : 'primary'}}>
        {text}
      </Button>
    </>
  );
};

export default ButtonCmp;
