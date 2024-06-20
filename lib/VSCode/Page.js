import React from 'react';
import { Flex, Grid, VSCode } from 'csss-raspberry';

export const Page = (props) => {
  const { apps, children, files, isMobileDevice, title } = props;

  return (
    <div
      className="bg-slate-950"
      style={{
        display: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh'
      }}
    >
      <Grid.Container
        columns={isMobileDevice ? '1fr' : '320px 1fr'}
        rows={isMobileDevice ? '64px 1fr' : '1fr'}
        areas={isMobileDevice ? ['navbar', 'content'] : ['navbar content']}
        style={{
          margin: 'auto',
          maxWidth: '1440px',
          height: '100%',
          overflow: 'hidden'
        }}
      >
        <VSCode.NavBar
          apps={apps}
          isMobileDevice={isMobileDevice}
          title={title}
        >
          {files}
        </VSCode.NavBar>
        <Flex.Container
          area="content"
          flow="column nowrap"
          className="overflow-y-scroll bg-slate-800 text-white"
          style={{ minHeight: '100vh' }}
        >
          {children}
        </Flex.Container>
      </Grid.Container>
    </div>
  );
};
