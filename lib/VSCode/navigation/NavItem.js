import React from 'react';
import { Link } from 'react-router-dom';

import python from '../images/python.png';

export const NavItem = ({ text, to, isInFolder, isSelected }) => {
  // TODO: isSelected should highlight an item

  return (
    <Link
      className={
        'background-400 py-1 text-md flex items-center gap-2 navTab ' +
        (isInFolder ? 'px-10 text-100 font-300' : 'px-2 text-white font-400')
      }
      to={to}
    >
      <img className="w-4 opacity-80 h-4" src={python}></img>
      {text}
    </Link>
  );
};
