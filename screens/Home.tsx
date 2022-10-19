import React from 'react';
import {Text, Button, Image, Stack, Row, ScrollView, Column} from 'native-base';
import HomeInput from '../Components/HomeInput';
import Images from '../Components/Images';
import Todays from '../Components/Todays';
import HomePress from '../Components/HomePress';
const Home = () => {
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
      <Stack flex="1" justifyContent={'space-between'} m={3}>
        <Row h={10} justifyContent={'space-between'} alignItems={'center'}>
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

        <ScrollView showsHorizontalScrollIndicator={false}>
          {NEWARIVAL.map(item => {
            return (
              <Row justifyContent={'space-between'} bg={'white'} padding={1}>
                <Image borderTopRadius={10} source={item.today} />
                <Column>
                  <Text fontWeight={'bold'}>{item.name}</Text>
                  <Text w={120}>
                    <Image
                      borderRadius={20}
                      size={5}
                      resizeMode="cover"
                      source={item.location}
                      alt="Dash Board Image"
                    />
                    {item.hottel}
                  </Text>
                </Column>
                <Button w={20} h={10} mt={6}>
                  BOOK
                </Button>
              </Row>
            );
          })}
        </ScrollView>
      </Stack>
    </ScrollView>
  );
};

export default Home;
