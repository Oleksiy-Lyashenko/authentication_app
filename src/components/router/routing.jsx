import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home';

import Login from '../Login';
import Register from '../Register';
import UserEditPage from '../UserEditPage';
import UserPage from '../UserPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Register />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export const userRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/user',
    element: <UserPage />,
  },
  {
    path: '/edit',
    element: <UserEditPage />,
  },
]);