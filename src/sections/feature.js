/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Html from 'assets/feature/html.png';
import Css from 'assets/feature/css.png';
import React from 'assets/feature/react.png';
import Next from 'assets/feature/next.png';
import Node from 'assets/feature/node.png';
import Mongo from 'assets/feature/mongo.png';
import Firebase from 'assets/feature/firebase.png';
import JavaScript from 'assets/feature/javascript.png';

const data = [
  {
    id: 1,
    imgSrc: Html,
    altText: 'HTML, CSS, JS',
    title: 'HTML, CSS, JS',
    text:
      'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.',
  },
  {
    id: 2,
    imgSrc: Css,
    altText: 'HTML, CSS, JS',
    title: 'HTML, CSS, JS',
    text:
      'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.',
  },
  {
    id: 3,
    imgSrc: JavaScript,
    altText: 'HTML, CSS, JS',
    title: 'HTML, CSS, JS',
    text:
      'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.',
  },
  {
    id: 4,
    imgSrc: React,
    altText: 'React',
    title: 'React',
    text:
      'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
  },
  {
    id: 5,
    imgSrc: Next,
    altText: 'Next.js',
    title: 'Next.js',
    text:
      'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.',
  },
  {
    id: 6,
    imgSrc: Node,
    altText: 'Node.js',
    title: 'Node.js',
    text:
      'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
  },
  {
    id: 7,
    imgSrc: Mongo,
    altText: 'MongoDB',
    title: 'MongoDB',
    text:
      'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
  },
  {
    id: 8,
    imgSrc: Firebase,
    altText: 'Firebase',
    title: 'Firebase',
    text:
      'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Technology"
          title="Tech used to perform products"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
