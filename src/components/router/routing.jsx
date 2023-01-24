import { createBrowserRouter } from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Register />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  }
])