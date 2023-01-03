import React from 'react';
import { LoginForm, LoginFormData } from '@/modules/authentication/ui/login-form/LoginForm';
import postLoginData from '@/modules/authentication/infrastructure/http/postLoginData';

const LoginFormFeature = () => {
  const onFormSubmit = async (data: LoginFormData) => {
    await postLoginData(data).then((value) => {
      console.log(value);
    });
  };

  return <LoginForm onFormSubmit={onFormSubmit} />;
};

export default LoginFormFeature;
