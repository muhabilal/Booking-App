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
} from 'native-base';
import {Image} from 'native-base';
import ButtonCmp from '../Components/ButtonCmp';
const First = () => {
  return (
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
    </Box>
  );
};

export default First;
