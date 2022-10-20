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
    <Box flex="1" bg={'singletons'}>
      <Stack h={350}>
        <Center mt={20}>
          <Image
            source={require('../assests/Order.png')}
            alt="Alternate Text"
          />
        </Center>
      </Stack>
      <Stack>
        <Column alignItems="center" justifyContent="center">
          <Heading size="2xl">Welcome</Heading>
          <Text>Before enjoying Foodmedia services</Text>
          <Text>Please register first</Text>
          <Stack height={100} />
          <VStack space={3} justifyContent="center" alignItems="center">
            <ButtonCmp
              btnText="Create Account"
              background={'primary'}
              press={() => navigation.navigate('Register')}
            />
            <ButtonCmp
              btnText="Login"
              background={'secondary'}
              // press={() => navigation.navigate('Login')}
            />
          </VStack>
          <Text fontSize="xs" mt={5}>
            By logging in or registering,you have agreed to the
            <Text color={'primary'}>Terms and</Text>
          </Text>
          <Text fontSize="xs">
            <Text color={'primary'}>Conditions</Text>
            <Text color={'primary'}>Privacy Policy.</Text>
          </Text>
        </Column>
      </Stack>
    </Box>
  );
};
export default First;
