import React from 'react';
import {
  Text,
  Button,
  Image,
  Stack,
  Row,
  ScrollView,
  Pressable,
} from 'native-base';
import HomeInput from '../Components/HomeInput';
import Images from '../Components/Images';
import Todays from '../Components/Todays';
import {HomePress, BookingResturant} from '../Components/HomePress';
const Home = ({navigation}) => {
  const IMAGES = [
    {imgelink: require('../assests/banner.png')},
    {imgelink: require('../assests/banner.png')},
    {imgelink: require('../assests/banner.png')},
    {imgelink: require('../assests/banner.png')},
  ];
  const TODAYSIMAGE = [
    {
      today: require('../assests/chicken.png'),
      name: 'Cicken Biryane',
      location: require('../assests/location.webp'),
      hottel: ' Ambrosia Hotel & Resturant',
    },
    {
      today: require('../assests/rice.png'),
      name: 'Cicken Biryane',
      location: require('../assests/location.webp'),
      hottel: ' Ambrosia Hotel & Resturant',
    },
    {
      today: require('../assests/chicken.png'),
      name: 'Cicken Biryane',
      location: require('../assests/location.webp'),
      hottel: ' Ambrosia Hotel & Resturant',
    },
  ];

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
      <Stack flex="1" justifyContent={'space-between'} mx={3}>
        <Row
          h={20}
          justifyContent={'space-between'}
          alignItems={'center'}
          bg={'white'}>
          <HomePress token={require('../assests/dash.png')} />

          <HomePress
            token={require('../assests/location.webp')}
            wriiten=" Agerabad 435, Chittagong"
          />
          <HomePress token={require('../assests/logo.png')} />
        </Row>
        <HomeInput />
        <Images imgurl={IMAGES} />

        <HomePress
          newse="Todays New Arivable"
          foodlist="Best Of the today Food list Update"
          seeall=" See All "
          token={require('../assests/next.png')}
        />
        <Todays todayimages={TODAYSIMAGE} />

        <HomePress
          newse="Todays New Arivable"
          foodlist="Best Of the today Food list Update"
          seeall=" See All "
          token={require('../assests/next.png')}
        />
        <BookingResturant newarival={NEWARIVAL} btntxt="Book" />
        <Row
          shadow="2"
          justifyContent={'space-evenly'}
          h={'20'}
          alignItems={'center'}
          borderTopRadius={20}>
          <Pressable onPress={() => navigation.navigate('Booking')}>
            <Text>Home</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Details')}>
            <Text>Details</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Details')}>
            <Text>Profile</Text>
          </Pressable>
        </Row>
      </Stack>
    </ScrollView>
  );
};

export default Home;
