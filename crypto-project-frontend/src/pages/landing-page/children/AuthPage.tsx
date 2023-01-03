import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link, Outlet } from 'react-router-dom';
import SignUpFormFeature from '@/modules/authentication/features/signup/SignupFormFeature';
import LoginFormFeature from '@/modules/authentication/features/login/LoginFormFeature';

export const AuthPageChildren = [
  {
    path: 'login',
    element: (
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
        <LoginFormFeature />
        <Link to="../signup" style={{ textDecoration: 'none' }}>
          <Typography variant="caption">Don't have an account? Sign up!</Typography>
        </Link>
      </Box>
    ),
  },
  {
    path: 'signup',
    element: (
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
          Sign up
        </Typography>
        <SignUpFormFeature />
        <Link to="../login" style={{ textDecoration: 'none' }}>
          <Typography variant="caption">Already have an account? Sign in!</Typography>
        </Link>
      </Box>
    ),
  },
];
export const AuthPage = () => <Outlet />;
