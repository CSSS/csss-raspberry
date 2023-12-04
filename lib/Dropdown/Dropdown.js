import React, { useState } from 'react';

import Button from '../Button';
import { Arrow, Hamburger, Cross } from '../Icon';

import './Dropdown.css';

/**
 * Dropdown menu.
 * @param {Object} props
 * @param {String} props.type - Type of button; e.g., 'icon', 'primary', 'secondary', 'primary icon', 'secondary icon', ...
 * @param {String} props.text - Button text
 * @param {String} props.icon - Button icon; e.g., 'arrow', 'hamburger'
 * @param {String} props.align - Alignment of dropdown menu relative to button
 * @param {Array} props.children - Child elements of Dropdown
 */
export default function Dropdown(props) {
  const { type, text, icon, align, children } = props;

  const [isDroppedDown, setIsDroppedDown] = useState(false);

  let iconElement = [];

  if (icon === 'arrow') {
    iconElement = isDroppedDown ? <Arrow className='rotate' /> : <Arrow />;
  } else if (icon === 'hamburger') {
    iconElement = isDroppedDown ? <Cross /> : <Hamburger />;
  }

  return (
    <div
      className={`mdb-dropdown ${type || ''}`}
      onBlur={() => setIsDroppedDown(false)}
    >
      <Button
        type={type}
        onClick={() => setIsDroppedDown(!isDroppedDown)}
      >
        {text ? text : []}
        {iconElement}
      </Button>
      <div className={`container ${align || 'center'} ${isDroppedDown ? '' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
}
