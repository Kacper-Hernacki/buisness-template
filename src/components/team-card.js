/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button, Text, Heading, Image, Box, Link } from 'theme-ui';

export default function TeamCard({ src, altText, title, url }) {
  return (
    <Box sx={styles.card}>
      <Link href={url}>
        {' '}
        <Image src={src} alt={altText} sx={styles.memberThumb} />
      </Link>

      <Box sx={styles.infoWrapper}>
        <Heading className="info__name" sx={styles.infoWrapper}>
          {title}
        </Heading>
      </Box>
      <Box sx={styles.socialShare} className="social__share"></Box>
    </Box>
  );
}

const styles = {
  button: {},
  card: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    pb: '20px',
    cursor: 'pointer',
    transition: 'ease-in-out 0.4s',
    borderRadius: '8px',
    position: 'relative',
    '&:hover': {
      boxShadow: ['none', null, '0 4px 10px rgba(39, 83, 123, 0.12)'],
      '.info__name': {
        color: 'primary',
      },
    },
  },

  memberThumb: {
    objectFit: 'contain',
    width: '100%',
    flexShrink: 0,
  },
  infoWrapper: {
    width: '100%',
    textAlign: 'center',
    mt: [1, null, 1],
    name: {
      fontSize: [1, 2, 3, null, null, 4],
      fontWeight: 'bold',
      lineHeight: [1.25, 1.35],
      transition: 'color 0.25s',
      mb: 1,
    },
  },
};
