import React from 'react';

import * as Flex from '../../Flex';

import './Sidebar.css';

/**
 * Vertical navigation bar. Position is decided upon by usage.
 * @param {object} props
 * @param {array} props.children - Child elements of Sidebar
 */
export default function Sidebar(props) {
  const { children } = props;

  return (
    <Flex.Container
      flow='column nowrap'
      justifyContent='flex-start'
      alignItems='stretch'
      className='mdb-navigation-sidebar'
    >
      {children}
    </Flex.Container>
  );
}
