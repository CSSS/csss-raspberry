import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { File } from '../Icon';

export const NavItem = ({ text, to, isInFolder }) => {
  // TODO: isSelected should highlight an item

  const fileStyle = {
    '--csss-icon-color': '#94a3b8', // slate-400
    '--csss-icon-stroke-width': '3px'
  };

  const location = useLocation();
  console.log('---');
  console.log(location.pathname);
  console.log(to);
  console.log(location.pathname === to);

  return (
    <Link
      className={
        'mx-1 py-1 px-2 text-md flex items-center gap-2 rounded-sm ' +
        (isInFolder ? 'pl-8 text-white ' : 'text-white ') +
        (location.pathname === to
          ? 'bg-slate-800 hover:bg-slate-700'
          : 'bg-slate-900 hover:bg-slate-700')
      }
      to={to}
    >
      <File style={fileStyle} />
      {text}
    </Link>
  );
};