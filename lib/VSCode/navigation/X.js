import React from 'react';

export const CloseIcon = () => {
  return (
    <div className="w-6 h-6 top-3 relative transition-opacity duration-300 ease-in-out opacity-100 mr-4">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-white rotate-45"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-white -rotate-45"></div>
    </div>
  );
};
