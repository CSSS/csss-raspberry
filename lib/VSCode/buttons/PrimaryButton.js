import React from 'react';

export const PrimaryButton = ({ className, text, onClick, href }) => {
  return (
    <div className={className}>
      <a href={href}>
        <button
          className="background-100 border-100 text-500 font-400 px-4 py-1 rounded-md buttonPrimary"
          onClick={onClick}
        >
          {text}
        </button>
      </a>
    </div>
  );
};
