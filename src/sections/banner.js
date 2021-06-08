/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button, Link } from 'theme-ui';
import BannerImg from 'assets/pc-front.png';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import BookIcon from '@material-ui/icons/Book';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Top Web Developement Services
          </Heading>
          <Box sx={styles.banner.socialsBox}>
            <Link
              sx={styles.banner.link}
              href="https://www.instagram.com/kacper.hernacki">
              {' '}
              <InstagramIcon sx={styles.banner.socialsBox.icons} />
            </Link>

            <Link
              sx={styles.banner.link}
              href="https://www.twitter.com/@KacperHernacki">
              {' '}
              <TwitterIcon sx={styles.banner.socialsBox.icons} />
            </Link>

            <Link
              sx={styles.banner.link}
              href="https://www.github.com/Kacper-Hernacki">
              {' '}
              <GithubIcon sx={styles.banner.socialsBox.icons} />
            </Link>

            <Link
              sx={styles.banner.link}
              href="https://pl.linkedin.com/in/kacper-hernacki-965161203">
              {' '}
              <LinkedInIcon sx={styles.banner.socialsBox.icons} />
            </Link>

            <Link
              sx={styles.banner.link}
              href="https://www.thedevsuniverse.com">
              {' '}
              <BookIcon sx={styles.banner.socialsBox.icons} />
            </Link>
          </Box>
          <Text as="p" variant="heroSecondary">
            Check out my website to find great quality of software products and
            services
          </Text>
          <Link href="https://thedevsuniverse.com">
            {' '}
            <Link href="https://thedevsuniverse.com">
              <Button sx={styles.banner.button} variant="primary">
                Read my latest posts
              </Button>
            </Link>
          </Link>
        </Box>
        <Box sx={styles.banner.imageBox}>
          <Image
            sx={styles.banner.imageBox.image}
            src={BannerImg}
            alt="banner"
          />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
    },
    link: {
      textDecoration: 'none',
      color: 'inherit',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        minHeight: [145, 'auto'],
        objectFit: 'contain',
        '@media screen and (max-width: 600px)': { display: 'none' },
      },
    },
    socialsBox: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '15px',
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
  },
};
