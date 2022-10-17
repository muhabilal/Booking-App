import {
  NativeBaseProvider,
  Stack,
  Center,
  Image,
  HStack,
  Row,
} from 'native-base';
import React, {useState} from 'react';
import InputsCmp from '../Components/InputsCmp';
import Press from '../Components/Press';

const Register = () => {
  const [isTrue, setIsTrue] = useState(true);
  return (
    <NativeBaseProvider>
      <Stack flex={1} bg={'#D9D9D9'}>
        <Center>
          <Image
            mt={5}
            resizeMode="cover"
            source={require('../assests/logo.png')}
            alt="Alternate Text"
          />
        </Center>
        <Stack flex={1} bg={'#FFFFFF'} borderTopRadius={30}>
          <Row justifyContent={'space-around'}>
            <Press txt="Create Account" />
            <Press txt="Login" />
          </Row>
        </Stack>
      </Stack>
    </NativeBaseProvider>
    // <Stack justifyContent="center" alignItems="center">
    //   <InputsCmp name="Fullname" Placeholder="Enter name" />
    // </Stack>
  );
};

export default Register;
