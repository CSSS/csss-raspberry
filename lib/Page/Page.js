import React from 'react';

import './Page.css';

/**
 * Main page.
 * @param {object} props
 * @param {array} props.children - Child elements of Page
 */
export default function Page(props) {
  const { children } = props;

  return (
    <div className='mdb-page'>
      {children}
    </div>
  );
}
