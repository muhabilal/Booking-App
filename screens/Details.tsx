import React from 'react';
import {
  ScrollView,
  Stack,
  Box,
  Button,
  Image,
  Row,
  Pressable,
  Text,
} from 'native-base';
import {HomePress} from '../Components/HomePress';
import {BookingHistory, BookingResturant} from '../Components/HomePress';
import Images from '../Components/Images';
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
      <Stack alignItems={'center'}>
        <HomePress
          newse="Todays New Arivable"
          foodlist="Best Of the today Food list Update"
          seeall=" See All "
          token={require('../assests/next.png')}
        />
        <BookingHistory bantxt="Details Resturant" />

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
          <Pressable onPress={() => navigation.navigate('Details')}>
            <Text color={'white'}>Booking</Text>
          </Pressable>
        </Row>
      </Stack>
    </ScrollView>
  );
}
