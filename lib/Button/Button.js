import React, { Children } from 'react';

import './Button.css';

/**
 * Button.
 * @param {object} props
 * @param {string} props.type
 * - Type of button; e.g., 'icon', 'primary', 'secondary', 'primary icon',
 *   'secondary icon', ...
 * @param {function} props.onClick - Function to run when clicked
 * @param {string} props.href - URL to go to when clicked
 * @param {array} props.children - Child elements of Button
 */
export default function Button(props) {
  const { type, onClick, href, children } = props;

  // any 'string' children should become <span> elements
  const mappedChildren = Children.map(children, child => {
    return typeof(child) === 'string' ? <span>{child}</span> : child;
  });

  if (href !== undefined) {
    return (
      <a
        className={`mdb-button ${type || ''}`}
        href={href}
      >
        {mappedChildren}
      </a>
    );
  }

  return (
    <button
      className={`mdb-button ${type || ''}`}
      onClick={onClick}
    >
      {mappedChildren}
    </button>
  );
}
