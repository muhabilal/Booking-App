import React from 'react';
import {Stack, Text, Row} from 'native-base';
import {HomePress} from '../Components/HomePress';

export default function Profile() {
  return (
    <Stack flex="1" mx={2}>
      <Row
        h={'1/6'}
        bg={'white'}
        borderRadius={40}
        mb={2}
        justifyContent={'space-around'}
        alignItems={'center'}>
        <HomePress token={require('../assests/logo.png')} />

        <Text justifyContent={'flex-end'}>
          <HomePress wriiten="Sadeeq Hossan" />
        </Text>
        <HomePress token={require('../assests/bell.png')} />
      </Row>
      <Row
        h={'1/6'}
        bg={'white'}
        mb={2}
        borderRadius={40}
        justifyContent={'space-around'}
        alignItems={'center'}>
        <HomePress token={require('../assests/account.png')} />

        <Text justifyContent={'flex-end'}>
          <HomePress wriiten="Account setting" />
        </Text>
        <HomePress token={require('../assests/edit.png')} />
      </Row>
      <Text> Profile</Text>
    </Stack>
  );
}
