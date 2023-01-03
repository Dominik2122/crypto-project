import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SignupEmailFormComponent,
  SignupStartFormData,
} from '@/modules/authentication/ui/signup-form/SignupEmailFormComponent';

const SignupStartFormFeature = () => {
  const navigate = useNavigate();
  const onFormSubmit = async (data: SignupStartFormData) => {
    navigate('auth/signup', { state: { email: data.email } });
  };

  return <SignupEmailFormComponent onFormSubmit={onFormSubmit} />;
};

export default SignupStartFormFeature;
