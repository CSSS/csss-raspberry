import React, { useState } from 'react';

import folder from '../images/folder.png';
import downArrow from '../images/downArrow.svg';
import rightArrow from '../images/rightArrow.svg';

export const NavFolder = ({ text, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleOpen}
        className="background-400 py-1 px-2.5 text-md font-300 flex items-center gap-0 text-300 navTab"
      >
        <img className="w-3 pt-0" src={isOpen ? downArrow : rightArrow} />
        <img
          className="w-6 ml-1 opacity-100 h-5 mix-blend-lighten"
          src={folder}
        />
        {text}
      </button>
      {isOpen ? children : []}
    </>
  );
};
