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
        <VSCode.NavBar />
        <VSCodeGuide />
      </>
    )
  },
  {
    path: '/projects',
    element: (
      <>
        <VSCode.NavBar />
        <p>projects</p>
      </>
    )
  },
  {
    path: '/about',
    element: (
      <>
        <VSCode.NavBar />
        <p>about</p>
      </>
    )
  },
  {
    path: '/officers',
    element: (
      <>
        <VSCode.NavBar />
        <p>officers</p>
      </>
    )
  },
  {
    path: '/officers/past',
    element: (
      <>
        <VSCode.NavBar />
        <p>officers - past</p>
      </>
    )
  },
  {
    path: '/documents/:document',
    element: (
      <>
        <VSCode.NavBar />
        <p>documents - something</p>
      </>
    )
  },
  {
    path: '/events/:event',
    element: (
      <>
        <VSCode.NavBar />
        <p>events - something</p>
      </>
    )
  },
  {
    path: '/more/:something',
    element: (
      <>
        <VSCode.NavBar />
        <p>more - something</p>
      </>
    )
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
