import React, {useState} from 'react';
import InputsCmp from '../Components/InputsCmp';
import {Stack} from 'native-base';
const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Stack space={7} mt={10}>
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
    </Stack>
  );
};

export default CreateAccount;
