import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router, userRouter } from './router/routing';
import { useAut } from '../hooks/use-auth';
import UserPage from './UserPage';

export default function App() {
  const { isAuth } = useAut();

  console.log(isAuth);

  return isAuth ? <RouterProvider router={userRouter} /> : <RouterProvider router={router} />;

  // return (
  //   <div className="wrapper">
  //     <UserPage />
  //   </div>
  // );
}
