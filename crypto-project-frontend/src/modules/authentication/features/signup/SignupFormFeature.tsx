import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useLocation } from 'react-router-dom';
import {
  SignupComponent,
  SignupFormData,
} from '@/modules/authentication/ui/signup-form/SignupComponent';

const SignUpFormFeature = () => {
  const location = useLocation();

  const onFormSubmit = async (data: SignupFormData) => {
    console.log(data);
  };

  return <SignupComponent email={location.state?.email} onFormSubmit={onFormSubmit} />;
};

export default SignUpFormFeature;
