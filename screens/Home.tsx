import React from 'react';
import {
  Text,
  HStack,
  Image,
  Stack,
  Center,
  Box,
  Row,
  ScrollView,
  VStack,
  Column,
} from 'native-base';
import HomeInput from '../Components/HomeInput';
const Home = () => {
  return (
    <Stack flex={1}>
      <HStack
        m={2}
        h={10}
        justifyContent={'space-between'}
        alignItems={'center'}>
        <Image
          position={'absolute'}
          left={0}
          resizeMode="cover"
          source={require('../assests/dash.png')}
          alt="Dash Board Image"
        />
        <Center>
          <Text>
            <Image
              borderRadius={20}
              size={5}
              resizeMode="cover"
              source={require('../assests/location.webp')}
              alt="Dash Board Image"
            />
            Agerabad 435, Chittagong
          </Text>
        </Center>
        <Box>
          <Image resizeMode="cover" source={require('../assests/logo.png')} />
        </Box>
      </HStack>
      <HomeInput />
      <Row h={40} m={1}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image source={require('../assests/banner.png')} />
          <Image source={require('../assests/banner.png')} />
        </ScrollView>
      </Row>
      <Row justifyContent={'space-between'} padding={5}>
        <Column>
          <Text style={{fontWeight: 'bold'}}>Todays New Arivable</Text>
          <Text>Best Of the today Food list Update</Text>
        </Column>
        <Text top={1}>
          See All <Image source={require('../assests/next.png')} />
        </Text>
      </Row>
      <Row h={170} m={1} alignItems={'center'}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Column bg={'white'}>
            <Image
              borderTopRadius={10}
              source={require('../assests/chicken.png')}
            />
            <Text fontWeight={'bold'}>Cicken Biryane</Text>
            <Text w={120}>
              <Image
                borderRadius={20}
                size={5}
                resizeMode="cover"
                source={require('../assests/location.webp')}
                alt="Dash Board Image"
              />
              Ambrosia Hotel & Resturant
            </Text>
          </Column>
          <Column bg={'white'} ml={1}>
            <Image
              borderTopRadius={10}
              source={require('../assests/rice.png')}
            />
            <Text fontWeight={'bold'}>Sauce Tonkatsu</Text>
            <Text w={120}>
              <Image
                borderRadius={20}
                size={5}
                resizeMode="cover"
                source={require('../assests/location.webp')}
                alt="Dash Board Image"
              />
              Ambrosia Hotel & Resturant
            </Text>
          </Column>
          <Column bg={'white'} ml={1}>
            <Image
              borderTopRadius={10}
              source={require('../assests/chicken.png')}
            />
            <Text fontWeight={'bold'}>Cicken Biryane</Text>
            <Text w={120}>
              <Image
                borderRadius={20}
                size={5}
                resizeMode="cover"
                source={require('../assests/location.webp')}
                alt="Dash Board Image"
              />
              Ambrosia Hotel & Resturant
            </Text>
          </Column>
        </ScrollView>
      </Row>
      <Row justifyContent={'space-between'} padding={5}>
        <Column>
          <Text style={{fontWeight: 'bold'}}>Todays New Arivable</Text>
          <Text>Best Of the today Food list Update</Text>
        </Column>
        <Text top={1}>
          See All <Image source={require('../assests/next.png')} />
        </Text>
      </Row>
      <Row bg={'white'} ml={1}>
        <Image borderTopRadius={10} source={require('../assests/end.png')} />
        <Column>
          <Text fontWeight={'bold'}>Cicken Biryane</Text>
          <Text w={120}>
            <Image
              borderRadius={20}
              size={5}
              resizeMode="cover"
              source={require('../assests/location.webp')}
              alt="Dash Board Image"
            />
            Ambrosia Hotel & Resturant
          </Text>
        </Column>
      </Row>
    </Stack>
  );
};

export default Home;
