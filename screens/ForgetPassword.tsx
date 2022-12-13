import {Text, Stack, Center, Heading, Row, Column} from 'native-base';
import React, {useState} from 'react';
import ButtonCmp from '../Components/ButtonCmp';
import InputsCmp from '../Components/InputsCmp';
import Press from '../Components/Press';

export default function ForgetPassword() {
  const [email, setEmail] = useState('');
  return (
    <Stack bg={'singletons'} flex={1} px={5}>
      <Stack flex={0.3} justifyContent={'flex-end'}>
        <Heading>Forget Password</Heading>
        <Text>Enter your registered email below </Text>
      </Stack>
      <Stack flex={0.3} justifyContent={'flex-end'}>
        <InputsCmp
          name="Email address"
          Placeholder="Eg namaemail@emailkamu.com"
          inputValue={email}
          setInputValue={setEmail}
        />
        <Row alignItems={'center'}>
          <Text>Remember the password?</Text>
          <Press txt="Sign in" />
        </Row>
      </Stack>
      <Stack flex={0.33} alignItems={'center'} justifyContent={'flex-end'}>
        <ButtonCmp btnText="Submit" background="primary" />
      </Stack>
    </Stack>
  );
}
