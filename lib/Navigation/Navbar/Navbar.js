import React, { useState, useEffect } from 'react';

import Dropdown from '../../Dropdown';
import { checkMediaQuery, watchMediaQuery } from '../../helpers';

import './Navbar.css';

const smallScreenQuery = '(min-width: 768px)';

/**
 * Horizontal navigation bar displayed at the top of the screen.
 * @param {object} props
 * @param {string} props.align
 * - Alignment of Navbar's children (between leading and trailing)
 * @param {array} props.leading
 * - Leading elements (usually icon, icon and title, or just title)
 * @param {array} props.trailing
 * - Trailing elements (usually page status information)
 * @param {array} props.children - Child elements of Navbar
 */
export default function Navbar(props) {
  const { align, leading, trailing, children } = props;

  const [isSmallScreen, setIsSmallScreen] = useState(
    checkMediaQuery(smallScreenQuery)
  );

  useEffect(() => {
    watchMediaQuery(smallScreenQuery, matches => setIsSmallScreen(matches));
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
