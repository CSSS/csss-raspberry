import React from 'react';

import * as Flex from '../../Flex';

import './Bar.css';

/**
 * Horizontal navigation bar displayed at the top of the screen.
 * @param {object} props
 * @param {string} props.align
 * - Alignment of Bar's children (between leading and trailing)
 * @param {array} props.leading
 * - Leading elements (usually icon, icon and title, or just title)
 * @param {array} props.trailing
 * - Trailing elements (usually page status information)
 * @param {array} props.children - Child elements of Bar
 */
export default function Bar(props) {
  const { align, leading, trailing, children } = props;

  return (
    <div className='mdb-navigation-bar'>
      <Flex.Container
        flow='row nowrap'
        justifyContent='space-between'
        alignItems='center'
        className='mdb-navigation-bar-flex'
      >
        <Flex.Container
          flow='row nowrap'
          justifyContent='flex-start'
          alignItems='center'
          gap='4px'
        >
          {leading}
          {align === 'left' ? children : []}
        </Flex.Container>
        {!align || align === 'center' ? (
          <Flex.Container
            flow='row nowrap'
            justifyContent='center'
            alignItems='center'
            gap='4px'
            className='mdb-navigation-bar-flex-center'
          >
            {children}
          </Flex.Container>
        ) : []}
        <Flex.Container
          flow='row nowrap'
          justifyContent='flex-end'
          alignItems='center'
          gap='4px'
        >
          {align === 'right' ? children : []}
          {trailing}
        </Flex.Container>
      </Flex.Container>
    </div>
  );
}
