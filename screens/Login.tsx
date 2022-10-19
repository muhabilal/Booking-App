import React, {useState} from 'react';
import InputsCmp from '../Components/InputsCmp';
import {Stack} from 'native-base';
import Press from '../Components/Press';
const Login = () => {
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
      <Press txt="Forget Password?" />
    </Stack>
  );
};

export default Login;
