import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { LandingPage, LandingPageRoutes } from '@/pages/landing-page/LandingPage';

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
    <RouterProvider router={router} />
  </>
);

export default App;
