import React, { useState, useEffect } from 'react';

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
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const clickHandler = () => setIsDroppedDown(false);

    if (isDroppedDown && !isMouseOver) {
      window.addEventListener('click', clickHandler);
      return () => window.removeEventListener('click', clickHandler);
    }

    // otherwise, don't listen for click events
  }, [isDroppedDown, isMouseOver]);

  return (
    <div
      className={`mdb-dropdown ${type || ''}`}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <Button
        type={type}
        onClick={() => setIsDroppedDown(!isDroppedDown)}
      >
        {text ? text : []}
        {
          icon === 'arrow' ?
            isDroppedDown ?
              <Arrow className='rotate' />
              : <Arrow />
            : icon === 'hamburger' ?
              isDroppedDown ?
                <Cross />
                : <Hamburger />
              : []
        }
      </Button>
      {
        isDroppedDown ?
          <div className={`container ${align || 'center'}`}>
            {children}
          </div>
          : []
      }
    </div>
  );
}
