/** @jsx jsx */
import { jsx, Container, Box, Image } from 'theme-ui';
import TextFeature from 'components/text-feature';

import FeatureThumb from 'assets/image.jpeg';
import shapePattern from 'assets/shape-pattern2-modified.png';
import { Avatar } from '@material-ui/core';

const data = {
  subTitle: 'About Me',
  title: 'Get to know me better',
  description:
    'Hi, I am Kacper Hernacki, the full-stack web developer. The passion for self-developing and solving complex problems led me to programming. After 5 years at the university and constantly learning programming languages like C, C++, Java, I have got know Web developing. It boosted me as a professional coder to the place I am here.',
  btnName: 'Curriculum vitae',
  btnURL: '#',
};

export default function CoreFeature() {
  return (
    <section sx={{ variant: 'section.coreFeature' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Avatar
            src={FeatureThumb}
            sx={styles.containerBox.imageAbout}
            alt="Thumbnail"
          />
          <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt="Shape" />
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],

    imageAbout: {
      width: '300px !important',
      height: '300px !important',
      objectFit: 'contain',
    },
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    ml: 'auto',
    mr: 'auto',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    maxWidth: '200px',
    position: 'absolute',
    bottom: -45,
    right: -35,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
