import React from 'react';
import {Stack, Row, ScrollView} from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeInput from '../Components/HomeInput';
import Images from '../Components/Images';
import Todays from '../Components/Todays';
import {HomePress, BookingResturant} from '../Components/HomePress';

const Home = ({navigation}) => {
  const Tab = createBottomTabNavigator();

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
          h={12}
          bg={'white'}
          mb={2}
          justifyContent={'space-between'}
          alignItems={'center'}>
          <HomePress size={6} token={require('../assests/dash.png')} />

          <HomePress
            size={6}
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
          navigation={() => {
            navigation.navigate('Details');
          }}
        />
        <Todays todayimages={TODAYSIMAGE} />

        <HomePress
          newse="Todays New Arivable"
          foodlist="Best Of the today Food list Update"
          seeall=" See All "
          token={require('../assests/next.png')}
          navigation={() => {
            navigation.navigate('Details');
          }}
        />
        <BookingResturant
          navigation={() => {
            navigation.navigate('Booking');
          }}
          newarival={NEWARIVAL}
          btntxt="Book"
        />
      </Stack>
    </ScrollView>
  );
};

export default Home;
