import {Stack, Center, Image, Row, NativeBaseProvider} from 'native-base';
import React, {useState} from 'react';
import InputsCmp from '../Components/InputsCmp';
import Press from '../Components/Press';
import CreateAccount from './CreateAccount';
import Login from './Login';

const Register = () => {
  const [isTrue, setIsTrue] = useState(true);
  return (
    <>
      <Stack flex={1} bg={'#D9D9D9'}>
        <Stack h={350}>
          <Center mt={20}>
            <Image
              source={require('../assests/Order.png')}
              alt="Alternate Text"
            />
          </Center>
        </Stack>
        <Stack
          bottom={0}
          h={535}
          w={'100%'}
          flex={0.5}
          position={'absolute'}
          bg="white"
          borderTopRadius={30}>
          <Row mt={10}>
            <Press txt="Create Account" padding_left={12} padding_right={10} />
            <Press txt="Login" />
          </Row>
          {/* <CreateAccount /> */}
          <Login />
        </Stack>
      </Stack>
    </>
  );
};

export default Register;
