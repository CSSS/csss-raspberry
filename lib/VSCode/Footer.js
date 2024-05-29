import React from 'react';

import * as Icon from '../Icon';

export const Footer = ({ className, style }) => {
  return (
    <footer
      className={
        'mt-8 w-full h-max p-8 gap-4 flex flex-col bg-slate-900 border-x border-slate-800 ' +
        className
      }
      style={style}
    >
      <div className="w-full flex flex-col gap-4 lg:flex-row">
        <div className="w-full h-max lg:grow flex flex-col">
          <h1 className="text-xl">
            <span
              style={{
                display: 'inline-block',
                padding: '8px 4px 0px 20px',
                backgroundColor: '#A6192E' // sfu dark red
              }}
            >
              SFU
            </span>
            <br />
            Computing Science Student Society
          </h1>
          <br />
          <h2 className="text-slate-400">Last updated 29 May, 2024</h2>
        </div>
        <div className="w-full h-max lg:w-32 lg:flex-none flex flex-col">
          <h1>Connect</h1>
          <h2>
            <Icon.Link /> Website
          </h2>
          <h2>
            <Icon.Link /> Email
          </h2>
          <h2>
            <Icon.Link /> Discord
          </h2>
          <h2>
            <Icon.Link /> Instagram
          </h2>
          <h2>
            <Icon.Link /> LinkedIn
          </h2>
        </div>
      </div>
      <p className="w-full h-4 text-gray-500 text-center">
        Made with &#9829; from the <u>W3 Committee</u> of the CSSS.
      </p>
    </footer>
  );
};
