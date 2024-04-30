import React from 'react';

export const Subtitle = ({ className, text, color, align, size }) => {
  return (
    <div className={`${className}`}>
      <h1 className={`${color} ${align} ${size} w-max font-300`}>{text}</h1>
    </div>
  );
};
