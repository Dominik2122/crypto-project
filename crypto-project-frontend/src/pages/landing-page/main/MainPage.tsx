import React from 'react';
import LandingPageLayout from '@/pages/landing-page/Layout/LandingPageLayout';
import LoginForm from '@/features/authentication/login/form/LoginForm';

const MainPage = () => (
  <LandingPageLayout>
    <LoginForm />
  </LandingPageLayout>
);
export default MainPage;
