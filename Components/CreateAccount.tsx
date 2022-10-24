import React, {useState} from 'react';
import InputsCmp from '../Components/InputsCmp';
import {Divider, ScrollView, Stack, VStack} from 'native-base';
import ButtonCmp from '../Components/ButtonCmp';
const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ScrollView>
      <Stack space={7} mt={5}>
        <InputsCmp
          name="Full Name"
          Placeholder="Enter your full name"
          inputValue={name}
          setInputValue={setName}
        />
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
          hide={true}
        />
        <VStack space={3} alignItems="center">
          <ButtonCmp btnText="Registration" background="light.100" />
          <Divider w={'40%'} />
          <ButtonCmp btnText="Sign Up with Google" background="light.100" />
        </VStack>
      </Stack>
    </ScrollView>
  );
};
export default CreateAccount;
