import {Input, Stack, Text} from 'native-base';
import React from 'react';

const InputsCmp = (props: any) => {
  const Name = props.name;
  const P_holder = props.Placeholder;
  const secure = props.hide;
  const Value = props.inputValue;
  const setValue = props.setInputValue;
  return (
    <Stack>
      <Text mb={2} fontWeight={'bold'} ml={2}>
        {Name}
      </Text>
      <Input
        h={'10'}
        w={'100%'}
        placeholder={P_holder}
        borderRadius={10}
        secureTextEntry={secure}
        value={Value}
        onChangeText={setValue}
      />
    </Stack>
  );
};

export default InputsCmp;
