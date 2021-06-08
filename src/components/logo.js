/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import { FaFileExcel } from 'react-icons/fa';

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
        width: '196px',
        '@media screen and (max-width: 800px)': { display: 'none' },
      }}
      {...rest}>
      <Image sx={styles.logo} src={src} alt="logo" />
    </Link>
  );
}

const styles = {
  logo: {
    '@media screen and (max-width: 900px)': {
      display: 'none',
    },
  },
};
