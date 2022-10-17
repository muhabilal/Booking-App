import React from 'react';
import {
  Center,
  Text,
  Heading,
  ScrollView,
  Stack,
  VStack,
  Box,
<<<<<<< HEAD
  Flex,
=======
>>>>>>> f86ff0316c70467c616d89423ef00f686934df62
} from 'native-base';
import {Image} from 'native-base';
import ButtonCmp from '../Components/ButtonCmp';
const First = () => {
  return (
<<<<<<< HEAD
    <Box flex="1" safeAreaTop>
      <ScrollView>
        <Stack>
          <Stack mt={20}>
            <Center>
              <Image
                source={require('../assests/logo.png')}
                alt="Alternate Text"
              />
            </Center>
          </Stack>
          <Stack mt={20}>
            <VStack alignItems="center" justifyContent="center">
              <Heading size="2xl">Welcome</Heading>
              <Text mt={4}>Before enjoying Foodmedia services</Text>
              <Text>Please register first</Text>
            </VStack>
          </Stack>
          <Stack mt={12}>
            <VStack space={3} justifyContent="center" alignItems="center">
              <ButtonCmp btnText="Create Account" />
              <ButtonCmp btnText="Login" />
            </VStack>
          </Stack>
          <VStack mt={2} alignItems="center" justifyContent="center">
            <Text fontSize="xs">
              By logging in or registering,you have agreed to the
              <Text color={'#32B768'}>Terms and</Text>
            </Text>
            <Text fontSize="xs">
              <Text color={'#32B768'}>Conditions</Text>and{' '}
              <Text color={'#32B768'}>Privacy Policy.</Text>
            </Text>
          </VStack>
        </Stack>
      </ScrollView>
=======
    <Box flex={'1'} bg={'white'}>
      <Stack mb={20}>
        {/* <ScrollView> */}
        <Stack mt={20}>
          <Center>
            <Image
              source={require('../assests/logo.png')}
              alt="Alternate Text"
            />
          </Center>
        </Stack>
        <Stack mt={20}>
          <VStack alignItems="center" justifyContent="center">
            <Heading size="2xl">Welcome</Heading>
            <Text mt={4}>Before enjoying Foodmedia services</Text>
            <Text>Please register first</Text>
          </VStack>
        </Stack>
        <Stack mt={12}>
          <VStack space={3} justifyContent="center" alignItems="center">
            <ButtonCmp
              btnText="Create Account"
              color_txt="#10B981"
              background={'#32B768'}
            />
            <ButtonCmp
              btnText="Login"
              background={'#D1FAE5'}
              color_txt="white"
            />
          </VStack>
        </Stack>
        <VStack mt={2} mb={10} alignItems="center" justifyContent="center">
          <Text fontSize="xs">
            By logging in or registering,you have agreed to the
            <Text color={'#32B768'}>Terms and</Text>
          </Text>
          <Text fontSize="xs">
            <Text color={'#32B768'}>Conditions</Text>and{' '}
            <Text color={'#32B768'}>Privacy Policy.</Text>
          </Text>
        </VStack>
        {/* </ScrollView> */}
      </Stack>
>>>>>>> f86ff0316c70467c616d89423ef00f686934df62
    </Box>
  );
};

export default First;
