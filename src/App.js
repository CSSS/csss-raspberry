import React, { useState, useEffect } from 'react';
import { VSCode } from 'csss-raspberry';

import './App.css';
import { VSCodeGuide } from './pages/VSCodeGuide';

function App() {
  const [view, setView] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    if (searchParams.has('view')) {
      setView(searchParams.get('view'));
    }
  }, []);

  return (
    <div className="app">
      <VSCode.Navbar />
      {/* can route using the view string with more pages */}
      <VSCodeGuide />
    </div>
  );
}

export default App;
