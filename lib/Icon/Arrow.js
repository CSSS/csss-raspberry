import React from 'react';

import './Icon.css';

export default function Arrow(props) {
  const { className } = props;

  return (
    <svg
      className={`mdb-icon ${className || ''}`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
    >
      <polyline points="4,12 16,24 28,12 "/>
    </svg>
  );
}
