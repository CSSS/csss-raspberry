import React, { useEffect, useState } from 'react';
import { Icon, Flex, Grid, VSCode, helpers } from 'csss-raspberry';

// example usage of the VSCode.NavBar component, passing in children
export const Page = ({ children }) => {
  const [user, setUser] = useState(null);

  const userLogin = () => {
    // when the user logs in, they should return to the current page
    helpers.casLogin(window.location.href);
  };

  // on page load
  useEffect(() => {
    const getUser = async () => {
      setUser(await helpers.casGetUser());
    };

    getUser(); // async
  }, []);

  const apps = (
    <>
      <Icon.CSSS style={{ '--csss-icon-color': 'white' }} />
      <Icon.Folder // a fake app; just a folder icon
        style={{
          '--csss-icon-color': '#64748b' // slate-500
        }}
      />
      <a style={{ marginTop: 'auto' }} href="#profile">
        <Icon.Profile // profile button, could open a modal menu on click
          style={{
            width: '100%',
            height: '100%',
            '--csss-icon-color': '#64748b', // slate-500
            '--csss-icon-stroke-width': '1px'
          }}
        />
      </a>
    </>
  );

  const files = (
    <>
      <VSCode.NavItem text="README.md" to="/" />
      <VSCode.NavFolder text="resources">
        <VSCode.NavItem isInFolder={true} text="React.md" to="/react" />
        <VSCode.NavItem isInFolder={true} text="Flex.md" to="/flex" />
        <VSCode.NavItem isInFolder={true} text="Grid.md" to="/grid" />
        <VSCode.NavItem isInFolder={true} text="VSCode.md" to="/vscode" />
      </VSCode.NavFolder>
      <VSCode.NavFolder text="GitHub">
        <VSCode.NavLink
          isInFolder={true}
          text="CSSS"
          href="https://github.com/CSSS"
        />
        <VSCode.NavLink
          isInFolder={true}
          text="CSSS/csss-raspberry"
          href="https://github.com/CSSS/csss-raspberry"
        />
        <VSCode.NavLink
          isInFolder={true}
          text="CSSS/csss-site-frontend"
          href="https://github.com/CSSS/csss-site-frontend"
        />
        <VSCode.NavLink
          isInFolder={true}
          text="CSSS/csss-site-backend"
          href="https://github.com/CSSS/csss-site-backend"
        />
      </VSCode.NavFolder>
    </>
  );

  return (
    <VSCode.Page apps={apps} files={files} title="csss-raspberry">
      {children}
    </VSCode.Page>
  );
};
