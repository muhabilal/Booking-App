import React from 'react';
import {Button} from 'native-base';
const ButtonCmp = (props: any) => {
  const text = props.btnText;
  const bg_color = props.background;
  return (
    <Button
      w={256}
      h={49}
      bg={bg_color}
      _text={{color: bg_color == '#32B768' ? 'white' : '#10B981'}}>
      {text}
    </Button>
  );
};

export default ButtonCmp;
