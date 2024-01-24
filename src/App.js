import React, { useState, useEffect } from 'react';
import {
  Button,
  Dropdown,
  Flex,
  Gallery,
  Icon,
  Navigation,
  helpers
} from 'mdb-react-components';

const isMobileDeviceQuery = '(max-width: 880px)';
const preferSidebarQuery = '(min-width: 1080px)';

const photos = [
  'https://random.dog/9e15ada8-a5cc-4bbf-94b0-a87dd1816c4a.png',
  'https://random.dog/43845f5b-607a-4774-a171-bb878bc408e3.JPG',
  'https://random.dog/813c353e-7c6b-45d9-a756-af99878133d7.jpg'
];

export default function App() {
  const [currentTheme, setCurrentTheme] = useState('');
  const [theme, setTheme] = useState('');
  const [isMobileDevice, setIsMobileDevice] = useState(
    helpers.checkMediaQuery(isMobileDeviceQuery)
  );
  const [preferSidebar, setPreferSidebar] = useState(
    helpers.checkMediaQuery(preferSidebarQuery)
  );

  // function called by toggle theme button
  function toggleTheme() {
    setTheme(theme === 'dark' ? '' : 'dark');
  }

  // leading elements of navigation
  const leading = (
    <h1 style={{ margin: '12px', fontSize: '14pt' }}>mdb-react-components</h1>
  );

  // class name(s) for menu buttons
  const menuClassName = helpers.classList([
    isMobileDevice ? '' : 'transparent',
    preferSidebar ? 'small' : ''
  ]);

  // styles for menu buttons
  const menuStyle = preferSidebar ? { justifyContent: 'flex-start' } : {};

  // menu elements of navigation
  const menu = (
    <>
      <Button className={menuClassName} style={menuStyle}>
        Button 1
      </Button>
      <Dropdown
        className={menuClassName}
        style={menuStyle}
        text='Dropdown'
        icon='arrow'
        iconAlign='left'
        isStaticDropdown={preferSidebar}
      >
        <Button
          className={menuClassName}
          style={menuStyle}
          depth={preferSidebar ? 1 : 0}
        >
          Button A
        </Button>
        <Button
          className={menuClassName}
          style={menuStyle}
          depth={preferSidebar ? 1 : 0}
        >
          Button B
        </Button>
      </Dropdown>
    </>
  );

  // trailing elements of navigation
  const trailing = (
    <>
      <Button
        className={preferSidebar ? 'small' : 'icon'}
        onClick={toggleTheme}
        style={preferSidebar ? { marginTop: 'auto' } : {}}
      >
        {theme === 'dark' ? <Icon.Moon /> : <Icon.Sun />}
        {preferSidebar || isMobileDevice ? 'Toggle Theme' : []}
      </Button>
      <Button
        className={helpers.classList(['primary', preferSidebar ? 'small' : ''])}
        href='https://github.com/micahdbak/mdb-react-components'
      >
        <Icon.Link />
        See GitHub
      </Button>
    </>
  );

  // main content of page
  const main = (
    <>
      <p>Buttons</p>
      <Flex.Container
        flow='row wrap'
        alignItems='center'
        gap='4px'
        style={{ marginBottom: '4px' }}
      >
        <Button className='large icon'><Icon.Sun /></Button>
        <Button className='large'>
          <Icon.Sun />
          Button
        </Button>
        <Button className='large'>Button</Button>
        <Button className='icon'><Icon.Sun /></Button>
        <Button>
          <Icon.Sun />
          Button
        </Button>
        <Button>Button</Button>
        <Button className='small icon'><Icon.Sun /></Button>
        <Button className='small'>
          <Icon.Sun />
          Button
        </Button>
        <Button className='small'>Button</Button>
      </Flex.Container>
      <Flex.Container
        flow='row wrap'
        alignItems='center'
        gap='4px'
        style={{ marginBottom: '4px' }}
      >
        <Button className='primary large icon'><Icon.Sun /></Button>
        <Button className='primary large'>
          <Icon.Sun />
          Button
        </Button>
        <Button className='primary large'>Button</Button>
        <Button className='primary icon'><Icon.Sun /></Button>
        <Button className='primary'>
          <Icon.Sun />
          Button
        </Button>
        <Button className='primary'>Button</Button>
        <Button className='primary small icon'><Icon.Sun /></Button>
        <Button className='primary small'>
          <Icon.Sun />
          Button
        </Button>
        <Button className='primary small'>Button</Button>
      </Flex.Container>
      <Flex.Container
        flow='row wrap'
        alignItems='center'
        gap='4px'
        style={{ marginBottom: '4px' }}
      >
        <Button className='transparent large icon'><Icon.Sun /></Button>
        <Button className='transparent large'>
          <Icon.Sun />
          Button
        </Button>
        <Button className='transparent large'>Button</Button>
        <Button className='transparent icon'><Icon.Sun /></Button>
        <Button className='transparent'>
          <Icon.Sun />
          Button
        </Button>
        <Button className='transparent'>Button</Button>
        <Button className='transparent small icon'><Icon.Sun /></Button>
        <Button className='transparent small'>
          <Icon.Sun />
          Button
        </Button>
        <Button className='transparent small'>Button</Button>
      </Flex.Container>
      <p>Dropdowns</p>
      <Flex.Container
        flow='row wrap'
        alignItems='center'
        gap='4px'
        style={{ marginBottom: '4px' }}
      >
        <Dropdown className='icon' icon='hamburger' align='left'>
          <Button>Left-Aligned</Button>
        </Dropdown>
        <Dropdown className='large' text='Dropdown' align='center'>
          <Button>Center-Aligned</Button>
        </Dropdown>
        <Dropdown className='primary small' text='Dropdown' align='right'>
          <Button>Right-Aligned</Button>
        </Dropdown>
        <Dropdown
          className='primary'
          icon='arrow'
          text='Dropdown'
          align='center'
        >
          <Button className='small'>Button One</Button>
          <Button className='small'>Button Two</Button>
          <Button className='small'>Button Three</Button>
          <Button className='primary small'>Another one!</Button>
        </Dropdown>
        <Dropdown
          className='transparent small'
          icon='arrow'
          text='Dropdown'
          align='left'
        >
          <p>Dropdown's have much the same visuals as Buttons.</p>
          <p>Thus, the specifics won't be outlined!</p>
        </Dropdown>
      </Flex.Container>
      <p>Icons</p>
      <p>
        <Icon.Arrow />
        <Icon.Bullet />
        <Icon.Cross />
        <Icon.Email />
        <Icon.Expand />
        <Icon.Film />
        <Icon.Hamburger />
        <Icon.Link />
        <Icon.Moon />
        <Icon.Option />
        <Icon.Pause />
        <Icon.Play />
        <Icon.Shrink />
        <Icon.Sun />
        <Icon.WhiteBullet />
      </p>
      <p>Gallery.Thumbnails</p>
      <Gallery.Thumbnails
        photos={photos}
        thumbnails={photos}
        maxWidth={512}
        maxHeight={512}
      />
      <p>Gallery.Slideshow</p>
      <Gallery.Slideshow
        photos={photos}
        thumbnails={photos}
        showControls={true}
        showCounter={true}
      />
    </>
  );

  // on load
  useEffect(() => {
    helpers.watchMediaQuery(
      isMobileDeviceQuery,
      matches => setIsMobileDevice(matches)
    );
    helpers.watchMediaQuery(
      preferSidebarQuery,
      matches => setPreferSidebar(matches)
    );
  }, []);

  // on set theme
  useEffect(() => {
    helpers.setTheme(currentTheme, theme);
    setCurrentTheme(theme);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  if (preferSidebar) {
    return (
      <Flex.Container
        flow='row nowrap'
        alignItems='stretch'
        style={{
          width: '100vw',
          height: '100vh'
        }}
      >
        <Navigation.Sidebar>
          {leading}
          {menu}
          {trailing}
        </Navigation.Sidebar>
        <Flex.Item
          flex='1 0'
          style={{
            padding: '8px',
            height: 'calc(100vh - 16px)',
            overflowY: 'scroll'
          }}
        >
          {main}
        </Flex.Item>
      </Flex.Container>
    );
  }

  return (
    <>
      {isMobileDevice ? (
        <Navigation.Bar
          leading={(
            <Dropdown
              className='large transparent icon'
              icon='hamburger'
              flexContainerStyle={{
                position: 'fixed',
                top: 'var(--mdb-navigation-bar-height)',
                right: '0',
                left: '0',
                transform: 'none'
              }}
            >
              {menu}
              <hr />
              {trailing}
            </Dropdown>
          )}
        >
          {leading}
        </Navigation.Bar>
      ) : (
        <Navigation.Bar
          leading={leading}
          trailing={trailing}
          compress={isMobileDevice}
        >
          {menu}
        </Navigation.Bar>
      )}
      <div
        style={{
          margin: 'auto',
          width: 'var(--mdb-page-width)'
        }}
      >
        {main}
      </div>
    </>
  );
}
