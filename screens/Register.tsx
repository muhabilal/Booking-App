import {Stack, Center, Image, Row, NativeBaseProvider} from 'native-base';
import React, {useState} from 'react';
import CreateAccount from '../Components/CreateAccount';
import InputsCmp from '../Components/InputsCmp';
import Press from '../Components/Press';
const Register = ({navigation}) => {
  const [isTrue, setIsTrue] = useState(false);
  return (
    <Stack h={'100%'} bg={'light.50'}>
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
        top={'1/4'}
        w={'100%'}
        position={'absolute'}
        bg="white"
        borderTopRadius={30}
        p={5}>
        <Row w="80%" justifyContent={'space-between'}>
          <Press
            txt="Create Account"
            // click={() => navigation.navigate('CreateAccount')}
          />
          <Press
            txt="Login"
            // click={() => navigation.navigate('Login')}
          />
        </Row>
        <CreateAccount />
      </Stack>
    </Stack>
  );
};

export default Register;
