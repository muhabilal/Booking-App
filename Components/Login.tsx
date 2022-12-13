import React, {useState} from 'react';
import InputsCmp from '../Components/InputsCmp';
import {Stack, Row, VStack, Divider} from 'native-base';
import Press from '../Components/Press';
import ButtonCmp from '../Components/ButtonCmp';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Stack>
      <Stack space={7} mt={12}>
        <InputsCmp
          name="Email address"
          Placeholder="Eg namaemail@emailkamu.com"
          inputValue={email}
          setInputValue={setEmail}
        />
        <InputsCmp
          name="Password"
          Placeholder="**** **** ****"
          inputValue={password}
          setInputValue={setPassword}
        />
      </Stack>
      <Row justifyContent={'flex-end'}>
        <Press
          txt="Forget Password?"
          click={() => {
            navigation.navigate('ForgetPassword');
          }}
        />
      </Row>
      <VStack mt={7} space={3} alignItems="center">
        <ButtonCmp
          btnText="Login"
          background="light.100"
          press={() => navigation.navigate('Home')}
        />
        <Divider w={'40%'} />
        <ButtonCmp btnText="Sign Up with Google" background="light.100" />
      </VStack>
    </Stack>
  );
};

export default Login;
