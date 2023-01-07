import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import BasicCryptoList from '@/modules/stock-market/features/basic-crypto-list/BasicCryptoList';
import SignupStartFormFeature from '@/modules/authentication/features/signup/SignupStartFormFeature';
import { useDesktopMediaQuery } from '@/shared/components/layout/media-query/Desktop';
import useUser from '@/modules/authentication/application/useUser';

const MainPageSignupStart = () => {
  const isDesktop = useDesktopMediaQuery();
  return (
    <Box
      component="section"
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography sx={{ fontWeight: 'bold' }} align="left" variant="h4">
        Start your practice and create your portfolio
      </Typography>
      <Typography align="left" variant="h6">
        Here you can access crypto live data, trade and practice your skills!
      </Typography>
      <Box
        sx={{
          '& form': {
            margin: 1,
            display: 'flex',
            flexDirection: isDesktop ? 'row' : 'column',
            '& .start-signup-form__email-field': {
              margin: 0,
            },
            '& button': {
              margin: 0,
              variant: 'small',
              marginY: !isDesktop ? 1 : 'unset',
              marginLeft: isDesktop ? 4 : 'unset',
              width: isDesktop ? '40%' : 'unset',
            },
          },
        }}
      >
        <SignupStartFormFeature />
      </Box>
    </Box>
  );
};

const MainPageWelcome = ({ userName }: { userName: string }) => (
  <Box
    component="section"
    sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Typography sx={{ fontWeight: 'bold' }} variant="h4">
      Welcome {userName}
    </Typography>
    <Typography align="center" variant="h6">
      Checkout your portfolio and trade!
    </Typography>
  </Box>
);

const MainPage = () => {
  const { user } = useUser();

  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: 2,
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        {user ? <MainPageWelcome userName={user.login.value} /> : <MainPageSignupStart />}
        <BasicCryptoList />
      </Box>
    </Container>
  );
};
export default MainPage;
