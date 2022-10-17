import React from 'react';
import {
  Center,
  Text,
  Heading,
  ScrollView,
  Stack,
  VStack,
  Box,
  Flex,
  Row,
  Column,
} from 'native-base';
import {Image} from 'native-base';
import ButtonCmp from '../Components/ButtonCmp';
const First = () => {
  return (
    <Box flex={'1'} bg={'white'}>
      <Stack>
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
          <Column alignItems="center" justifyContent="center">
            <Heading size="2xl">Welcome</Heading>
            <Text mt={4}>Before enjoying Foodmedia services</Text>
            <Text>Please register first</Text>
          </Column>
        </Stack>
        <Stack mt={12}>
          <VStack space={3} justifyContent="center" alignItems="center">
            <ButtonCmp btnText="Create Account" background={'#32B768'} />
            <ButtonCmp btnText="Login" background={'#D1FAE5'} />
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
      </Stack>
    </Box>
  );
};

export default First;
