import React from 'react';

export const Title = ({ className, text, color, align, size }) => {
  return (
    <div className={`${className}`}>
      <h1 className={`${color} ${align} ${size} font-500`}>{text}</h1>
    </div>
  );
};
