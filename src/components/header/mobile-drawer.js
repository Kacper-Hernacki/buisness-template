import React, { useState } from 'react';
import { Box } from 'theme-ui';
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from 'components/drawer';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { Link } from 'react-scroll';
import menuItems from './header.data';

export default function MobileDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="26px" />
        </Box>
      }
      open={isDrawerOpen}
      toggleHandler={() => setIsDrawerOpen((prevState) => !prevState)}
      closeButton={<IoMdClose size="24px" color="#000" />}
      drawerStyle={styles.drawer}>
      <Scrollbars autoHide>
        <Box sx={styles.content}>
          <Box sx={styles.menu}>
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
          </Box>
          <Box sx={styles.menuFooter}>
            <Box sx={styles.social}></Box>
          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
}

const styles = {
  handler: {
    display: 'flex',

    justifyContent: 'center',
    width: '26px',
    cursor: 'pointer',
    '@media screen and (min-width: 1024px)': {
      display: 'none',
    },
    '@media screen and (max-width: 900px)': {
      backgroundColor: 'background',
      padding: '8px',
      width: '42px',
      borderRadius: '5px',
    },

    '@media screen and (max-width: 400px)': {
      backgroundColor: 'transparent',
      padding: '0px',
      width: '26px',
    },
  },

  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'dark',
  },

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer',
  },

  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px',
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: 'text_white',
      py: '15px',
      cursor: 'pointer',
      borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'secondary',
      },
      '&.active': {
        color: 'secondary',
      },
    },
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
  },

  button: {
    color: 'white',
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0',
  },
};
