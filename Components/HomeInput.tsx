import {Input, Stack, Text, Image, Box} from 'native-base';
import React from 'react';

const HomeInput = (props: any) => {
  const Name = props.name;
  const secure = props.hide;
  const Value = props.inputValue;
  const setValue = props.setInputValue;
  return (
    <Box>
      <Image
        h={10}
        w={10}
        resizeMode="cover"
        position={'absolute'}
        left={2}
        top={6}
        source={require('../assests/search.png')}
        alt="jello"
      />
      <Stack alignItems={'center'}>
        <Text>{Name}</Text>

        <Input
          paddingLeft={10}
          size="md"
          placeholder={'Search'}
          w="95%"
          borderRadius={10}
          type={secure}
          value={Value}
          onChangeText={setValue}
        />
      </Stack>
    </Box>
  );
};

export default HomeInput;
