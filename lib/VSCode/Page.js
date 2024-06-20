import React from 'react';
import { Flex, Grid, VSCode } from 'csss-raspberry';

export const Page = (props) => {
  const { apps, children, files, isMobileDevice, title } = props;

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
      <VSCode.NavBar apps={apps} isMobileDevice={isMobileDevice} title={title}>
        {files}
      </VSCode.NavBar>
      <Flex.Container
        area="content"
        flow="column nowrap"
        className="overflow-y-scroll bg-slate-800 text-white"
        style={{ minHeight: '100vh' }}
      >
        <div className="p-8 grow">{children}</div>
      </Flex.Container>
    </Grid.Container>
  );
};
