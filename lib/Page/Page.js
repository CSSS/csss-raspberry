import React from 'react';

import './Page.css';

export default function Page(props) {
  const { children } = props;

  return (
    <div className='mdb-page'>
      {children}
    </div>
  );
}
