import React from 'react';
import {
  SignupStartFormComponent,
  SignupStartFormData,
} from '@/modules/authentication/signup/ui/form/SignupStartFormComponent';

const SignupStartFormFeature = () => {
  const onFormSubmit = async (data: SignupStartFormData) => {
    console.log(data);
  };

  return <SignupStartFormComponent onFormSubmit={onFormSubmit} />;
};

export default SignupStartFormFeature;
