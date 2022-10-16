import {Input, ScrollView, Stack, Text} from 'native-base';
import React from 'react';

const InputsCmp = (props: any) => {
  const Name = props.name;
  const P_holder = props.Placeholder;
  const secure = props.hide;
  const Value = props.inputValue;
  const setValue = props.setInputValue;
  return (
    <ScrollView>
      <Stack>
        <Text>{Name}</Text>
        <Input
          size="md"
          placeholder={P_holder}
          w="75%"
          borderRadius={10}
          type={secure}
          value={Value}
          onChangeText={setValue}
        />
      </Stack>
    </ScrollView>
  );
};

export default InputsCmp;
