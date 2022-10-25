import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import MainPage from './pages/landing-page/main/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
]);

const App = () => (
  <>
    <CssBaseline />
    <RouterProvider router={router} />
  </>
);

export default App;
