import React, { useState, useEffect } from 'react';

import Dropdown from '../../Dropdown';
import * as Flex from '../../Flex';
import { checkMediaQuery, watchMediaQuery } from '../../helpers';

import './Bar.css';

const mobileDeviceQuery = '(max-width: 768px)';

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

  const [isMobileDevice, setIsMobileDevice] = useState(
    checkMediaQuery(mobileDeviceQuery)
  );

  useEffect(() => {
    watchMediaQuery(mobileDeviceQuery, matches => setIsMobileDevice(matches));
  }, []);

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
        >
          {leading}
          {align === 'left' && !isMobileDevice ? children : []}
        </Flex.Container>
        {isMobileDevice ? (
          <Dropdown type='nav icon' align='navigation-bar-stretch' icon='hamburger'>
            {children}
            <hr />
            {trailing}
          </Dropdown>
        ) : (
          <>
            {align === 'center' ? (
              <Flex.Container
                flow='row nowrap'
                justifyContent='center'
                alignItems='center'
                className='mdb-navigation-bar-flex-center'
              >
                {children}
              </Flex.Container>
            ) : []}
            <Flex.Container
              flow='row nowrap'
              justifyContent='flex-end'
              alignItems='center'
            >
              {align === 'right' ? children : []}
              {trailing}
            </Flex.Container>
          </>
        )}
      </Flex.Container>
    </div>
  );
}
