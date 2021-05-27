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
    altText: 'HTML',
    title: 'HTML',
    text:
      'HTML stands for Hyper Text Markup Language and it is the standard markup language for creating Web pages. Html describes the structure of a Web page.',
  },
  {
    id: 2,
    imgSrc: Css,
    altText: 'CSS',
    title: 'CSS',
    text:
      'CSS is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying out and structuring web pages.',
  },
  {
    id: 3,
    imgSrc: JavaScript,
    altText: 'JS',
    title: 'JavaScript',
    text:
      'JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive.',
  },
  {
    id: 4,
    imgSrc: React,
    altText: 'React',
    title: 'React JS',
    text:
      'React JS is a JavaScript library used in web development to build interactive elements on websites.',
  },
  {
    id: 5,
    imgSrc: Next,
    altText: 'Next.js',
    title: 'Next.js',
    text:
      'Next.js is a JavaScript framework created by Vercel. It lets you build server-side rendering and static web applications using React.',
  },
  {
    id: 6,
    imgSrc: Node,
    altText: 'Node.js',
    title: 'Node.js',
    text:
      'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
  },
  {
    id: 7,
    imgSrc: Mongo,
    altText: 'MongoDB',
    title: 'MongoDB',
    text:
      'MongoDB is a document-oriented NoSQL database used for high volume data storage.',
  },
  {
    id: 8,
    imgSrc: Firebase,
    altText: 'Firebase',
    title: 'Firebase',
    text:
      'Firebase is a Backend-as-a-Service. It provides developers with a variety of tools and services to help them develop quality apps, grow their user base, and earn profit. It is built on Google’s infrastructure.',
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
