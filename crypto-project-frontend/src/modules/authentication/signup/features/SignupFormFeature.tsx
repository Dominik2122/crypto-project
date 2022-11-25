import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoginForm, LoginFormData } from 'modules/authentication/login/ui/form/LoginForm';
import postLoginData from 'modules/authentication/login/infrastructure/postLoginData';

const SignUpForm = () => {
  const onFormSubmit = async (data: LoginFormData) => {
    await postLoginData(data).then((value) => {
      console.log(value);
    });
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
      <LoginForm onFormSubmit={onFormSubmit} />
    </Box>
  );
};

export default SignUpForm;
