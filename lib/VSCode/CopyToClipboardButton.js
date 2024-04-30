import React from 'react';
import icon from '../lib/images/copyBtn.png';

export const CopyToClipboardButton = ({ textToCopy, className }) => {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log('Text copied to clipboard:', textToCopy);
        // alert('Text copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy text to clipboard:', error);
        // alert('Failed to copy text to clipboard. Please try again.');
      });
  };

  return (
    <button
      className={`${className} absolute bg-black bg-opacity-60 hover:bg-green-400 hover:bg-opacity-60 transition duration-300 ease-in-out px-1 py-1 rounded-md`}
      onClick={copyToClipboard}
    >
      <img className="w-6" src={icon}></img>
    </button>
  );
};
