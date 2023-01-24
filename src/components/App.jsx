import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/routing';

export default function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}
