import React from 'react';

import './Icon.css';

/**
 * Link (arrow) icon.
 * @param {Object} props
 * @param {String} props.className - Additional class(es) for SVG icon
 */
export default function Link(props) {
  const { className } = props;

  return (
    <svg
      className={`mdb-icon ${className || ''}`}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
    >
      <line x1="28" y1="4" x2="4" y2="28"/>
      <polyline points="12,4 28,4 28,20 "/>
    </svg>
  );
}
