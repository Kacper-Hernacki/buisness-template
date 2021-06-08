/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import page1 from 'assets/portfolio/stajnia.png';
import Member2 from 'assets/portfolio/thegrinder.png';
import Member3 from 'assets/portfolio/covid.png';
import Member4 from 'assets/portfolio/poduchy.png';
import Member5 from 'assets/portfolio/blog.png';
import Member6 from 'assets/portfolio/allegro.png';

const data = [
  {
    id: 1,
    imgSrc: page1,
    altText: 'Stajnia Przysieka',
    title: 'Stajnia Przysieka',
    url: 'https://www.stajnia-przysieka.pl',
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'The Grinder',
    title: 'The Grinder',
    url: 'https://gym-app-67d7a.web.app/',
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'Covid-19 Tracker',
    title: 'Covid-19 Tracker',
    url: 'https://covid-tracker-ea067.web.app/',
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: 'Poduchy Anuchy',
    title: 'Poduchy Anuchy',
    url: 'https://poduchy-anuchy.web.app/',
  },
  {
    id: 5,
    imgSrc: Member6,
    altText: 'Allegro Clone',
    title: 'Allegro Clone',
    url: 'https://allegro-clone-bc495.web.app/',
  },
  {
    id: 6,
    imgSrc: Member5,
    altText: 'The Devs Universe',
    title: 'The Devs Universe',
    url: 'https://www.thedevsuniverse.com/',
  },
];

export default function TeamSection() {
  return (
    <section>
      <Container sx={styles.container}>
        <SectionHeader slogan="Portfolio" title="My projects" />
      </Container>
      <Grid sx={styles.grid}>
        {data.map((item) => (
          <TeamCard
            key={item.id}
            src={item.imgSrc}
            altText={item.altText}
            title={item.title}
            url={item.url}
          />
        ))}
      </Grid>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
