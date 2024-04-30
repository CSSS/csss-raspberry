import React from 'react';

export const SubscriptText = ({ className, text, color, align, size }) => {
  return (
    <div className={`${className}`}>
      <h1
        className={`${color} ${align} ${size} w-max font-100 text-opacity-40`}
      >
        {text}
      </h1>
    </div>
  );
};
