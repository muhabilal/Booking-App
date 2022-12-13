import React from 'react';
import {ScrollView, Stack, Box, Text, Row, Pressable, Image} from 'native-base';
import {BookingHistory, BookingResturant} from '../Components/HomePress';
export default function Booking({navigation}) {
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
        <BookingHistory bantxt="Booking History" />
        <Box w={'90%'}>
          <BookingResturant newarival={NEWARIVAL} btntxt="Check" />
        </Box>
        <Row
          shadow="1"
          justifyContent={'space-evenly'}
          w={'50%'}
          h={'10'}
          bg={'white'}
          alignItems={'center'}
          borderRadius={10}>
          <Pressable onPress={() => navigation.navigate('Details')}>
            <Text color={'#6B7280'}>
              <Image source={require('../assests/plus.png')} /> Booking more
            </Text>
          </Pressable>
        </Row>
      </Stack>
    </ScrollView>
  );
}
