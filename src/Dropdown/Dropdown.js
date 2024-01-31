import React, { useState } from 'react';

import { Button } from '../Button';
import * as Flex from '../Flex';
import { Arrow, Hamburger, Cross } from '../Icon';
import { classList } from '../helpers';

import './Dropdown.css';

/**
 * Dropdown menu.
 * @param {object} props
 * @param {string} props.className
 * - Type of button; e.g., 'icon', 'primary', 'secondary', 'primary icon',
 *   'secondary icon', ..., and/or size of button; e.g., 'small'
 * @param {string} props.style - Additional styles (for the Dropdown)
 * @param {integer} props.depth - Depth of menu
 * @param {array} props.text - Button text
 * @param {string} props.icon - Button icon; e.g., 'arrow', 'hamburger'
 * @param {string} props.iconAlign
 * - Alignment of dropdown icon; e.g., 'left', 'right'; default is right align
 * @param {string} props.align - Alignment of dropdown menu relative to button
 * @param {boolean} props.isDroppedDownInitially
 * - Whether to be dropped down initially or not
 * @param {boolean} props.isStaticDropdown
 * - Whether to display dropdown items statically or not
 * @param {string} props.flexContainerStyle
 * - Additional styles (for the Flex.Container)
 * @param {string} props.buttonStyle - Additional styles (for the Button)
 * @param {array} props.children - Child elements of Dropdown
 */
export function Dropdown(props) {
  const {
    className,
    style,
    depth,
    text,
    icon,
    iconAlign,
    align,
    isDroppedDownInitially,
    isStaticDropdown,
    flexContainerStyle,
    buttonStyle,
    children
  } = props;

  const [isDroppedDown, setIsDroppedDown] = useState(!!isDroppedDownInitially);

  let iconElement = [];

  if (icon === 'arrow') {
    if (isStaticDropdown) {
      iconElement = isDroppedDown ? <Arrow /> : <Arrow className='rotate90' />;
    } else {
      iconElement = isDroppedDown ? <Arrow className='rotate180' /> : <Arrow />;
    }
  } else if (icon === 'hamburger') {
    iconElement = isDroppedDown ? <Cross /> : <Hamburger />;
  }

  return (
    <div
      className='mdb-dropdown'
      style={style}
      onBlur={e => {
        if (!e.currentTarget.contains(e.relatedTarget) && !isStaticDropdown) {
          setIsDroppedDown(false);
        }
      }}
    >
      <p>{text || 'Menu'}</p>
      <Button
        className={className}
        style={buttonStyle}
        depth={depth}
        onClick={() => setIsDroppedDown(!isDroppedDown)}
      >
        {iconAlign === 'left' ? (
          <>{iconElement}{text || []}</>
        ) : (
          <>{text || []}{iconElement}</>
        )}
      </Button>
      <Flex.Container
        flow='column nowrap'
        justifyContent='flex-start'
        alignItems='stretch'
        gap='4px'
        className={classList([
          'mdb-dropdown-flex',
          align || 'center',
          isDroppedDown ? '' : 'hidden',
          isStaticDropdown ? 'static' : ''
        ])}
        style={{
          marginTop: isStaticDropdown ? '4px' : undefined,
          ...flexContainerStyle
        }}
      >
        {children}
      </Flex.Container>
    </div>
  );
}
