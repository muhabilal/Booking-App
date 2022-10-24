import React from 'react';
import {
  ScrollView,
  Stack,
  Box,
  Image,
  Row,
  Pressable,
  Text,
  Column,
} from 'native-base';
import {BookingHistory, BookingResturant} from '../Components/HomePress';
import Booking from './Booking';
export default function Details({navigation}) {
  const NEWARIVAL = [
    {
      today: require('../assests/end.png'),
      name: 'Cicken Biryane',
      location: require('../assests/location.webp'),
      hottel: ' Ambrosia Hotel & Resturant',
    },
    {
      today: require('../assests/end.png'),
      name: 'Cicken Biryane',
      location: require('../assests/location.webp'),
      hottel: ' Ambrosia Hotel & Resturant',
    },
    {
      today: require('../assests/end.png'),
      name: 'Cicken Biryane',
      location: require('../assests/location.webp'),
      hottel: ' Ambrosia Hotel & Resturant',
    },
  ];
  return (
    <ScrollView>
      <Stack alignItems={'center'} flex="1" justifyContent={'space-between'}>
        <BookingHistory bantxt="Details Resturant" />
        <Column
          w={'90%'}
          shadow="1"
          bg={'#FFFFFF'}
          borderRadius={10}
          justifyContent={'space-between'}
          padding={1}>
          <Text fontWeight={'bold'}>Tava Resturant</Text>
          <Text>
            <Image
              borderRadius={20}
              size={5}
              resizeMode="cover"
              source={require('../assests/location.webp')}
              alt="Dash Board Image"
            />
            kazi Dairy , Taiger Pass ,Chittagong
          </Text>
          <Image
            my={2}
            borderRadius={10}
            source={require('../assests/detail.png')}
          />
        </Column>

        <Text></Text>
        <Box w={'90%'}>
          <BookingResturant newarival={NEWARIVAL} btntxt="Check" />
        </Box>
        <Row
          justifyContent={'space-evenly'}
          w={'50%'}
          h={'10'}
          bg={'primary'}
          alignItems={'center'}
          borderRadius={10}>
          <Pressable onPress={() => navigation.navigate('Booking')}>
            <Text color={'white'}>Booking</Text>
          </Pressable>
        </Row>
      </Stack>
    </ScrollView>
  );
}
