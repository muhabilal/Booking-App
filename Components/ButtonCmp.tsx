import React from 'react';
import {Button} from 'native-base';
import {useIsPressed} from 'native-base/lib/typescript/components/primitives/Pressable/Pressable';
import {color} from 'native-base/lib/typescript/theme/styled-system';
const ButtonCmp = (props: any) => {
  const text = props.btnText;
  const bg_color = props.background;
  const text_color = props.color_txt;
  var colormode = '';
  return (
    <Button
      w="256"
      h="49"
      bg={bg_color}
      _text={{color: bg_color == '#32B768' ? 'white' : '#10B981'}}>
      {text}
    </Button>
  );
};

export default ButtonCmp;
