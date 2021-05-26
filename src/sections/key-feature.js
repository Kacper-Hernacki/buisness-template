/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text: 'All products are coded with extremely efficient latest technology.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Responsiveness',
    title: 'Responsiveness',
    text:
      'Web apps are created to perfectly change dimensions in mobile formats.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Modern UI/UX Design',
    title: 'Modern UI/UX Design',
    text:
      'Products are designed to have the modern layout and intuitive use of application.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Backend',
    title: 'Backend',
    text:
      'If needed, client is provided with full backend services like, configurated database and payment platforms.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Product key features"
          title="Meet the latest technology"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
