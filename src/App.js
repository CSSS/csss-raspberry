import React, { useState, useEffect } from 'react';
import { VSCode } from 'csss-raspberry';

import './App.css';
import { VSCodeGuide } from './pages/VSCodeGuide';

function App() {
  const searchParams = new URLSearchParams(window.location.search);
  let view = 'home.py';
  if (searchParams.has('view')) {
    view = `${searchParams.get('view')}.py`;
  }

  return (
    <div className="app">
      <VSCode.Navbar />
      {/* can route using the view string with more pages */}
      <VSCode.TabBar view={view} />
      <VSCodeGuide />
    </div>
  );
}

export default App;
