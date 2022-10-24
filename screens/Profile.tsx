import React from 'react';
import {Stack, Button, Row, Text, Image, Column} from 'native-base';
import Profilecmp from '../Components/Profilecmp';

export default function Profile() {
  const setting = [
    {
      icon: require('../assests/logo.png'),
      text: 'Language',
      icon1: require('../assests/next.png'),
    },
    {
      icon: require('../assests/logo.png'),
      text: 'Feedback',
      icon1: require('../assests/next.png'),
    },
    {
      icon: require('../assests/logo.png'),
      text: 'Rate us',
      icon1: require('../assests/next.png'),
    },
    {
      icon: require('../assests/logo.png'),
      text: 'New Version',
      icon1: require('../assests/next.png'),
    },
  ];

  return (
    <Stack flex="1" m={5} alignItems={'center'}>
      <Profilecmp
        token={require('../assests/logo.png')}
        wriiten="Sadeeq Hossan"
        icon={require('../assests/bell.png')}
      />

      <Profilecmp
        token={require('../assests/account.png')}
        wriiten="Account setting"
        icon={require('../assests/edit.png')}
      />
      <Column bg={'singletons'} w={'95%'} borderRadius={20} my={5} p={6}>
        {setting.map(item => {
          return (
            <Row justifyContent={'space-between'}>
              <Image source={item.icon} />
              <Text mr={20}>{item.text}</Text>
              <Image source={item.icon1} />
            </Row>
          );
        })}
      </Column>
      <Button borderRadius={'3xl'} w={'50%'} bg={'ternary.50'}>
        <Text color={'singletons'} fontWeight={'bold'}>
          Log-Out
        </Text>
      </Button>
    </Stack>
  );
}
