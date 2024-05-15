import React from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { VSCode } from 'csss-raspberry';

import './index.css';
import { VSCodeGuide } from './pages';

const router = createHashRouter([
  {
    path: '/',
    element: (
      <>
        <VSCode.Navbar />
        <VSCodeGuide />
      </>
    )
  },
  {
    path: '/projects',
    element: (
      <>
        <VSCode.Navbar />
        <p>projects</p>
      </>
    )
  },
  {
    path: '/about',
    element: (
      <>
        <VSCode.Navbar />
        <p>about</p>
      </>
    )
  },
  {
    path: '/officers',
    element: (
      <>
        <VSCode.Navbar />
        <p>officers</p>
      </>
    )
  },
  {
    path: '/officers/past',
    element: (
      <>
        <VSCode.Navbar />
        <p>officers - past</p>
      </>
    )
  },
  {
    path: '/documents/:document',
    element: (
      <>
        <VSCode.Navbar />
        <p>documents - something</p>
      </>
    )
  },
  {
    path: '/events/:event',
    element: (
      <>
        <VSCode.Navbar />
        <p>events - something</p>
      </>
    )
  },
  {
    path: '/more/:something',
    element: (
      <>
        <VSCode.Navbar />
        <p>more - something</p>
      </>
    )
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
