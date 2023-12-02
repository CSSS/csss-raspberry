import React from 'react';

import { Navigation } from 'mdb-react-components';

function App() {
  return (
    <Navigation.Navbar
      align="center"
      leading={[
        <p>mdb-react-components</p>
      ]}
      trailing={[
        <a href="https://github.com/micahdbak/mdb-react-components">
          View source code on GitHub
        </a>
      ]}
      revealer={<span className='material-symbols-outlined'>menu</span>}
    >
      <p>Example React App</p>
      <p>By Micah!</p>
    </Navigation.Navbar>
  );
}

export default App;
