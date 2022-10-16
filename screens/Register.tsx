import {Stack, Text} from 'native-base';
import React from 'react';
import InputsCmp from '../Components/InputsCmp';

const Register = () => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <InputsCmp name="Fullname" Placeholder="Enter name" />
    </Stack>
  );
};

export default Register;
