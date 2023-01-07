import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { LandingPage, LandingPageRoutes } from '@/pages/landing-page/LandingPage';
import { AuthContextProvider } from '@/modules/authentication/application/authContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    children: LandingPageRoutes,
  },
  {
    path: '*',
    element: (
      <main style={{ padding: '1rem' }}>
        <p>There's nothing here!</p>
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
