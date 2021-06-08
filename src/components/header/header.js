/** @jsx jsx */
import { useState } from 'react';
import { jsx, Container, Flex, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import Logo from 'components/logo';
import LogoDark from 'assets/logo.svg';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';
import menuItemsPL from './headerPL.data';

export default function Header({ className }) {
  const [language, setLanguage] = useState('EN');

  const polish = () => {
    return true;
  };

  const english = () => {
    return true;
  };

  return (
    <header sx={styles.header} className={className} id="header">
      <Container sx={styles.container}>
        <Logo src={LogoDark} />
        <Flex as="nav" sx={styles.nav}>
          {menuItems.map((menuItem, i) => (
            <Link
              activeClass="active"
              to={menuItem.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={i}>
              {menuItem.label}
            </Link>
          ))}
        </Flex>
        <Flex sx={styles.languages}>
          <div onClick={polish} sx={styles.languages.language}>
            PL
          </div>
          <div onClick={english} sx={styles.languages.language}>
            EN
          </div>
        </Flex>
        <a href="https://www.thedevsuniverse.com">
          {' '}
          <Button
            className="donate__btn"
            variant="secondary"
            aria-label="Get started">
            Blog
          </Button>
        </a>

        <MobileDrawer />
      </Container>
    </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  languages: {
    mr: '20px',
    language: { ml: '5px', cursor: 'pointer' },
  },
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',

    '@media screen and (max-width: 900px)': { height: '120px' },
    '@media screen and (max-width: 400px)': { height: '50px', pb: '3px' },

    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
      '@media screen and (max-width: 900px)': {
        display: 'none',
        boxShadow: '0 0px 0px rgba(0, 0, 0, 0.00)',
      },
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      '@media screen and (max-width: 900px)': {
        backgroundColor: 'transparent',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.00)',
      },
      '@media screen and (max-width: 400px)': {
        backgroundColor: 'background',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      },
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
    },
    pt: '12px !important',
    pb: '12px',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
  },
};
