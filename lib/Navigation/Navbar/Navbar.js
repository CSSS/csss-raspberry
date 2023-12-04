import React, { useState, useEffect } from 'react';

import Dropdown from '../../Dropdown';

import './Navbar.css';

/**
 * Horizontal navigation bar displayed at the top of the screen.
 * @param {Object} props
 * @param {String} props.align - Alignment of Navbar's children (between leading and trailing)
 * @param {Array} props.leading - Leading elements (usually icon, icon and title, or just title)
 * @param {Array} props.trailing - Trailing elements (usually page status information)
 * @param {Array} props.children - Child elements of Navbar
 */
export default function Navbar(props) {
  const { align, leading, trailing, children } = props;

  const [isSmallScreen, setIsSmallScreen] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', e => setIsSmallScreen(e.matches));
  }, []);

  if (isSmallScreen) {
    return (
      <>
        <div className='mdb-navigation-navbar'>
          <div className='container'>
            <div className='group'>{leading}</div>
            <div className={`group children ${align || ''}`}>{children}</div>
            <div className='group'>{trailing}</div>
          </div>
        </div>
        <div className='mdb-navigation-navbar-spacer' />
      </>
    );
  }

  return (
    <>
      <div className='mdb-navigation-navbar'>
        <div className='container'>
          <div className='group'>{leading}</div>
          <Dropdown type='nav icon' align='right' icon='hamburger'>
            {children}
            <hr />
            {trailing}
          </Dropdown>
        </div>
      </div>
      <div className='mdb-navigation-navbar-spacer' />
    </>
  );
}
