import React from 'react';

import { Navigation } from 'mdb-react-components';

function App() {
  return (
    <Navigation.Navbar
      leading={[
        <p>mdb-react-components</p>
      ]}
      trailing={[
        <a href="https://github.com/micahdbak/mdb-react-components">
          View source code on GitHub
        </a>
      ]}
    >
      <p>Example React App</p>
    </Navigation.Navbar>
  );
}

export default App;
