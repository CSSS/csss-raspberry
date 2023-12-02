import React from 'react';

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

  if (align === 'left') {
    return (
      <div className='mdb-navigation-navbar'>
        <div className='container'>
          <div className='leading'>
            {leading}
            {children}
          </div>
          <div className='trailing'>
            {trailing}
          </div>
        </div>
      </div>
    );
  } else if (align === 'right') {
    return (
      <div className='mdb-navigation-navbar'>
        <div className='container'>
          <div className='leading'>
            {leading}
          </div>
          <div className='trailing'>
            {children}
            {trailing}
          </div>
        </div>
      </div>
    );
  }

  // align === 'center', or other
  return (
    <div className='mdb-navigation-navbar'>
      <div className='container'>
        <div className='leading'>
          {leading}
        </div>
        <div className='center'>
          {children}
        </div>
        <div className='trailing'>
          {trailing}
        </div>
      </div>
    </div>
  );
}
