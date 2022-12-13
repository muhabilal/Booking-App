import React from 'react';
import {
  Center,
  Text,
  Heading,
  Stack,
  VStack,
  Box,
  Column,
  Image,
  Pressable,
} from 'native-base';
import ButtonCmp from '../Components/ButtonCmp';
const First = ({navigation}) => {
  return (
    <Stack flex="1" bg={'singletons'}>
      <Stack h={350}>
        <Center mt={20}>
          <Image
            source={require('../assests/Order.png')}
            alt="Alternate Text"
          />
        </Center>
      </Stack>
      <Column alignItems="center" justifyContent="center">
        <Heading size="2xl">Welcome</Heading>
        <Text>Before enjoying Foodmedia services</Text>
        <Text>Please register first</Text>
        <Stack height={100} />
        <VStack space={3} justifyContent="center" alignItems="center">
          <ButtonCmp
            btnText="Create Account"
            background={'primary.10'}
            press={() => navigation.navigate('Register')}
          />
          <ButtonCmp
            btnText="Login"
            background={'secondary.10'}
            // press={() => navigation.navigate('Login')}
          />
        </VStack>
        <Text fontSize="xs">
          By logging in or registering,you have agreed to the
          <Text color={'primary.10'}>Terms and</Text>
        </Text>
        <Text fontSize="xs">
          <Text color={'primary.10'}>Conditions</Text>
          <Text color={'primary.10'}>Privacy Policy.</Text>
        </Text>
      </Column>
    </Stack>
  );
};
export default First;
