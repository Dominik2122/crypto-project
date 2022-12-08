import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  SignupComponent,
  SignupFormData,
} from '@/modules/authentication/signup/ui/form/SignupComponent';

const SignUpForm = () => {
  const onFormSubmit = async (data: SignupFormData) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <SignupComponent onFormSubmit={onFormSubmit} />
    </Box>
  );
};

export default SignUpForm;
