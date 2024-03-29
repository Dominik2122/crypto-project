import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { LandingPage } from '@/pages/landing-page/LandingPage';
import { AuthContextProvider } from '@/modules/authentication/application/authContext';
import { AuthPage, AuthPageChildren } from '@/pages/auth/AuthPage';
import { CryptoPage, CryptoPageChildren } from '@/pages/crypto/CryptoPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    handle: {
      crumb: () => 'Home',
    },
  },
  {
    path: '/auth',
    element: <AuthPage />,
    children: AuthPageChildren,
    handle: {
      crumb: () => 'Authorization',
    },
  },
  {
    path: '/profile',
  },
  {
    path: '/crypto',
    element: <CryptoPage />,
    children: CryptoPageChildren,
    handle: {
      crumb: () => 'Crypto',
    },
  },
  {
    path: '*',
    element: (
      <main style={{ padding: '1rem' }}>
        <p>Page under construction, sorry!</p>
      </main>
    ),
  },
]);

const App = () => (
  <>
    <CssBaseline />
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </>
);

export default App;
