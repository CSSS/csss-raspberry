import React from 'react';

import pythonIcon from '../images/python.png';

export const TabBar = ({ view }) => {
  // border-b-0, border-l-0 does not work when border-600 is set
  const borderStyle = {
    borderBottom: 'none',
    borderLeft: 'none',
    borderWidth: '1px'
  };

  // TODO: Maybe adjust layout via `display`,
  // currently hardcoding margin values
  // use flex and change flex direction to float around the Navbar component?
  return (
    <header className="flex mb-8">
      <div className="flex fixed w-screen background-400 mb-4 lg:ml-80 lg:pt-0 pt-24">
        <h1
          className="flex items-center background-700 py-1 px-5 gap-2 text-md text-100 font-400 border-600"
          style={borderStyle}
        >
          <img className="w-4 opacity-80 h-4" src={pythonIcon} />
          {view}
        </h1>
      </div>
    </header>
  );
};

export default TabBar;
