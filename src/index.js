import React from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import { Page } from './components';
import './index.css';

const router = createHashRouter([
  {
    path: '/',
    element: (
      <Page>
        <p>Main Page</p>
      </Page>
    )
  },
  {
    path: '/react',
    element: (
      <Page>
        <p>Information about React</p>
      </Page>
    )
  },
  {
    path: '/flex',
    element: (
      <Page>
        <p>Information about CSS Flex Boxes</p>
      </Page>
    )
  },
  {
    path: '/grid',
    element: (
      <Page>
        <p>Information about CSS Grid Layout</p>
      </Page>
    )
  },
  {
    path: '/vscode',
    element: (
      <Page>
        <p>Information about the VSCode Components</p>
      </Page>
    )
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
