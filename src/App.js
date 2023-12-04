import React from 'react';

import { Button, Dropdown, Icon, Navigation, Page } from 'mdb-react-components';

function App() {
  return (
    <>
      <Navigation.Navbar
        align='center'
        leading={[<h1>Navigation.Navbar</h1>]}
        trailing={[
          <Button type='primary' href='https://github.com/micahdbak/mdb-react-components'>
            mdb-react-components <Icon.Link />
          </Button>
        ]}
      >
        <Button type='nav'>Home</Button>
        <Button type='nav'>About</Button>
        <Button type='nav'>Contact</Button>
        <Dropdown type='nav' icon='arrow' text='Dropdown'>
          <Button type='nav'>Nested Button</Button>
          <Button type='nav'>Another Button</Button>
          <Button type='nav'>Another One</Button>
          <Dropdown type='nav' icon='arrow' text='Nested Dropdown'>
            <Button type='nav'>Really Nested</Button>
            <Button type='nav'>Uh-huh</Button>
          </Dropdown>
        </Dropdown>
      </Navigation.Navbar>
      <Page>
        <section>
          <h1>Button</h1>
          <p>The following &apos;link&apos; buttons include the Icon.Link component, seen in a below section.</p>
          <Button type='primary' href='#'>Primary Link <Icon.Link /></Button>
          <Button type='primary'>Primary Button</Button>
          <br />
          <Button type='nav' href='#'>Navigation Link <Icon.Link /></Button>
          <Button type='nav'>Navigation Button</Button>
          <br />
          <Button href='#'>Plain Link <Icon.Link /></Button>
          <Button>Plain Button</Button>
        </section>
        <hr />
        <section>
          <h1>Dropdown</h1>
          <Dropdown type='primary' text='Primary Dropdown'><p>Each child element is a row.</p></Dropdown>
          <Dropdown type='primary' text='Primary Dropdown Arrow' icon='arrow'><p>Each child element is a row.</p></Dropdown>
          <Dropdown type='primary' text='Primary Dropdown Hamburger' icon='hamburger'><p>Each child element is a row.</p></Dropdown>
          <Dropdown type='primary icon' icon='arrow'><p>Each child element is a row.</p></Dropdown>
          <Dropdown type='primary icon' icon='hamburger'><p>Each child element is a row.</p></Dropdown>
          <br />
          <Dropdown type='nav' text='Navigation Dropdown'><p>Each child element is a row.</p></Dropdown>
          <Dropdown type='nav' text='Navigation Dropdown Arrow' icon='arrow'><p>Each child element is a row.</p></Dropdown>
          <Dropdown type='nav' text='Navigation Dropdown Hamburger' icon='hamburger'><p>Each child element is a row.</p></Dropdown>
          <Dropdown type='nav icon' icon='arrow'><p>Each child element is a row.</p></Dropdown>
          <Dropdown type='nav icon' icon='hamburger'><p>Each child element is a row.</p></Dropdown>
          <br />
          <Dropdown text='Plain Dropdown'><p>Each child element is a row.</p></Dropdown>
          <Dropdown text='Plain Dropdown Arrow' icon='arrow'><p>Each child element is a row.</p></Dropdown>
          <Dropdown text='Plain Dropdown Hamburger' icon='hamburger'><p>Each child element is a row.</p></Dropdown>
          <Dropdown type='icon' icon='arrow'><p>Each child element is a row.</p></Dropdown>
          <Dropdown type='icon' icon='hamburger'><p>Each child element is a row.</p></Dropdown>
        </section>
        <hr />
        <section>
          <h1>Icon</h1>
          <p>Icon&apos;s are inline-blocks.</p>
          <p>Arrow: <Icon.Arrow /></p>
          <p>Cross: <Icon.Cross /></p>
          <p>Hamburger: <Icon.Hamburger /></p>
          <p>Link (NW arrow): <Icon.Link /></p>
          <p>Option (S+W arrow): <Icon.Option /></p>
        </section>
      </Page>
    </>
  );
}

export default App;
