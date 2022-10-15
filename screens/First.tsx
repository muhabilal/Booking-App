import {Text, View} from 'react-native';
import React from 'react';
import {ScrollView, Stack} from 'native-base';
import {Image} from 'native-base';
const First = () => {
  return (
    <ScrollView>
      <Stack>
        <Image
          source={require('../assests/Saly-22.png')}
          alt="Alternate Text"
        />
      </Stack>
    </ScrollView>
  );
};

export default First;
