import React, { useEffect, useState } from 'react';
import { Icon, Flex, Grid, VSCode, helpers } from 'csss-raspberry';

const isMobileDeviceQuery = '(max-width: 768px)';

// example usage of the VSCode.NavBar component, passing in children
export const Page = ({ children }) => {
  const [isMobileDevice, setIsMobileDevice] = useState(
    helpers.checkMediaQuery(isMobileDeviceQuery)
  );

  const [user, setUser] = useState(null);

  const userLogin = () => {
    helpers.casLogin('http://localhost:3000');
  };

  // on page load
  useEffect(() => {
    // NOTE: this will only add an event listener ONCE, regardless of how
    // many times it is called (see implementation of helpers.watchMediaQuery
    // in lib/helpers.js).
    helpers.watchMediaQuery(isMobileDeviceQuery, setIsMobileDevice);
    // isMobileDevice will update when the media query changes

    const casGetUser = async () => {
      const _user = await helpers.casGetUser();

      setUser(_user);
    };

    casGetUser(); // async
  }, []);

  const apps = (
    <>
      <Icon.CSSS />
      <Icon.Folder // a fake app; just a folder icon
        style={{
          '--csss-icon-color': '#64748b' // slate-500
        }}
      />
      <Icon.Profile // profile button, could open a modal menu on click
        style={{
          marginTop: 'auto', // stick to end of flexbox
          '--csss-icon-color': '#64748b', // slate-500
          '--csss-icon-stroke-width': '2px'
        }}
      />
    </>
  );

  const navBar = (
    <VSCode.NavBar
      apps={apps}
      isMobileDevice={isMobileDevice}
      title="csss-raspberry"
    >
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
    </VSCode.NavBar>
  );

  return (
    <Grid.Container
      columns={isMobileDevice ? '1fr' : '320px 1fr'}
      rows={isMobileDevice ? '64px 1fr' : '1fr'}
      areas={isMobileDevice ? ['navbar', 'content'] : ['navbar content']}
      style={{
        display: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden'
      }}
    >
      {navBar}
      <Flex.Container
        area="content"
        flow="column nowrap"
        className="overflow-y-scroll bg-slate-800 text-white"
        style={{ minHeight: '100vh' }}
      >
        <div className="p-8 grow">{children}</div>
        <p>{JSON.stringify(user)}</p>
        <button onClick={userLogin}>Login</button>
      </Flex.Container>
    </Grid.Container>
  );
};
