import React, { useState, useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { obsidian } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {
  Button,
  Dropdown,
  Grid,
  Icon,
  Navigation,
  helpers
} from 'mdb-react-components';

function Code(props) {
  const { code } = props;

  return (
    <SyntaxHighlighter language='javascript' style={obsidian}>
      {code}
    </SyntaxHighlighter>
  );
}

const buttonCode =
`// import Button
import { Button } from 'mdb-react-components';

export default function Component() {
  return <Button>Yay!</Button>;
}`;

export default function App() {
  const [currentTheme, setCurrentTheme] = useState('');
  const [theme, setTheme] = useState('');

  useEffect(() => {
    helpers.setTheme(currentTheme, theme);
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <>
      <Navigation.Bar
        align='center'
        leading={[<h1>Navigation.Bar</h1>]}
        trailing={[
          <Button
            onClick={() => {
              theme === 'dark' ? setTheme('') : setTheme('dark');
            }}
          >
            Theme
          </Button>,
          <Button
            type='primary'
            href='https://github.com/micahdbak/mdb-react-components'
          >
            GitHub <Icon.Link />
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
          <Dropdown
            type='nav'
            icon='arrow'
            text='Nested Dropdown'
            expand={true}
          >
            <Button type='nav'>Really Nested</Button>
            <Button type='nav'>Uh-huh</Button>
          </Dropdown>
        </Dropdown>
      </Navigation.Bar>
      <Grid.Container
        rows='auto auto auto'
        columns='var(--mdb-page-margin) 1fr 1fr var(--mdb-page-margin)'
        areas={[
          '. a b .',
          '. c . .',
          '. footer footer .'
        ]}
        gap='4px'
        style={{
          width: '100vw'
        }}
      >
        <section style={{ gridArea: 'a' }}>
          <h1>Button</h1>
          <Code code={buttonCode} />
          <p>
            The following &apos;link&apos; buttons include the Icon.Link
            component, seen in a below section.
          </p>
          <Button type='primary' href='#'>Primary Link <Icon.Link /></Button>
          <Button type='primary'>Primary Button</Button>
          <br />
          <Button type='nav' href='#'>Navigation Link <Icon.Link /></Button>
          <Button type='nav'>Navigation Button</Button>
          <br />
          <Button href='#'>Plain Link <Icon.Link /></Button>
          <Button>Plain Button</Button>
        </section>
        <section style={{ gridArea: 'b' }}>
          <h1>Dropdown</h1>
          <Dropdown type='primary' text='Primary Dropdown'>
            <p>Each child element is a row.</p>
          </Dropdown>
          <Dropdown type='primary' text='Primary Dropdown Arrow' icon='arrow'>
            <p>Each child element is a row.</p>
          </Dropdown>
          <Dropdown
            type='primary'
            text='Primary Dropdown Hamburger'
            icon='hamburger'
          >
            <p>Each child element is a row.</p>
          </Dropdown>
          <Dropdown type='primary icon' icon='arrow'>
            <p>Each child element is a row.</p>
          </Dropdown>
          <Dropdown type='primary icon' icon='hamburger'>
            <p>Each child element is a row.</p>
          </Dropdown>
          <br />
          <Dropdown type='nav' text='Navigation Dropdown'>
            <p>Each child element is a row.</p>
          </Dropdown>
          <Dropdown type='nav' text='Navigation Dropdown Arrow' icon='arrow'>
            <p>Each child element is a row.</p>
          </Dropdown>
          <Dropdown
            type='nav'
            text='Navigation Dropdown Hamburger'
            icon='hamburger'
          >
            <p>Each child element is a row.</p>
          </Dropdown>
          <Dropdown type='nav icon' icon='arrow'>
            <p>Each child element is a row.</p>
          </Dropdown>
          <Dropdown type='nav icon' icon='hamburger'>
            <p>Each child element is a row.</p>
          </Dropdown>
          <br />
          <Dropdown text='Plain Dropdown'>
            <p>Each child element is a row.</p>
          </Dropdown>
          <Dropdown text='Plain Dropdown Arrow' icon='arrow'>
            <p>Each child element is a row.</p>
          </Dropdown>
          <Dropdown text='Plain Dropdown Hamburger' icon='hamburger'>
            <p>Each child element is a row.</p>
          </Dropdown>
          <Dropdown type='icon' icon='arrow'>
            <p>Each child element is a row.</p>
          </Dropdown>
          <Dropdown type='icon' icon='hamburger'>
            <p>Each child element is a row.</p>
          </Dropdown>
        </section>
        <section style={{ gridArea: 'c' }}>
          <h1>Icon</h1>
          <p>Icon&apos;s are inline-blocks.</p>
          <p>Arrow: <Icon.Arrow /></p>
          <p>Cross: <Icon.Cross /></p>
          <p>Hamburger: <Icon.Hamburger /></p>
          <p>Link (NW arrow): <Icon.Link /></p>
          <p>Option (S+W arrow): <Icon.Option /></p>
        </section>
        <Grid.Item area='footer'>
          <p>This is a footer.</p>
        </Grid.Item>
      </Grid.Container>
    </>
  );
}
