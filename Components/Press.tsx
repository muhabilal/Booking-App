import React from 'react';
import {Button} from 'native-base';

const Press = (props: any) => {
  const text = props.txt;
  const onclick = props.click;
  return (
    <Button
      size="lg"
      variant="link"
      _text={{color: 'primary.10'}}
      onPress={onclick}>
      {text}
    </Button>
  );
};

export default Press;
