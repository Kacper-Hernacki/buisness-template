/** @jsx jsx */
import { jsx, Box, Container, Image, Text, Link } from 'theme-ui';
import FooterLogo from 'assets/logo.svg';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import BookIcon from '@material-ui/icons/Book';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Link path="/">
            <Image src={FooterLogo} sx={styles.footer.image} alt="Logo" />
          </Link>
          <Text sx={styles.footer.copyright}>
            Copyright by Kacper Hernacki {new Date().getFullYear()}
          </Text>
          <Text sx={styles.footer.vectors}>
            Icons vector and buisness vector created by fullvector -
            www.freepik.com
          </Text>
        </Box>
        <Box sx={styles.footer.socialsBox}>
          <Link
            sx={styles.footer.link}
            href="https://www.instagram.com/kacper.hernacki">
            <InstagramIcon sx={styles.footer.socialsBox.icons} />
          </Link>

          <Link
            sx={styles.footer.link}
            href="https://www.twitter.com/@KacperHernacki">
            <TwitterIcon sx={styles.footer.socialsBox.icons} />
          </Link>

          <Link
            sx={styles.footer.link}
            href="https://www.github.com/Kacper-Hernacki">
            {' '}
            <GithubIcon sx={styles.footer.socialsBox.icons} />
          </Link>

          <Link
            sx={styles.footer.link}
            href="https://pl.linkedin.com/in/kacper-hernacki-965161203">
            <LinkedInIcon sx={styles.footer.socialsBox.icons} />
          </Link>

          <Link sx={styles.footer.link} href="https://www.thedevsuniverse.com">
            {' '}
            <BookIcon sx={styles.footer.socialsBox.icons} />
          </Link>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column',
      mt: '30px',
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },

    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
    image: {
      objectFit: 'contain',
      width: '300px',
    },
    vectors: {
      fontSize: [1, '15px'],
      width: '100%',
    },
    socialsBox: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '-30px',
      marginBottom: '15px',
      icons: {
        fontSize: '30px !important',
        marginRight: '10px !important',
        marginLeft: '10px !important',
        cursor: 'pointer',

        '&:hover': {
          color: 'primary',
        },
      },
    },
    link: {
      textDecoration: 'none',
      color: 'inherit',
    },
  },
};
