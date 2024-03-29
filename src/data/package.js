/** @jsx jsx */
import { jsx, Container, Box, Flex } from 'theme-ui';
import { keyframes } from '@emotion/core';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import PriceCard from 'components/price-card';
import ButtonGroup from 'components/button-group';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';

const packages = {
  monthly: [
    {
      id: 1,
      name: 'Basic',
      description: 'Landing Page created with React JS and Next.js.',
      buttonText: 'Contact',
      priceWithUnit: '$40',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle className="option__none" />,
          text: 'Design Customization',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Content Upload',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Responsive Design',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Include Source Code',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Number of Pages: 1',
          isAvailable: true,
        },
        {
          id: 6,
          icon: <IoIosCheckmarkCircle />,
          text: 'Revisions: 1',
          isAvailable: true,
        },
        {
          id: 7,
          icon: <IoIosCheckmarkCircle />,
          text: 'Delivery time: 3 days ',
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      name: 'Standard',
      description:
        'Up to 6 pages front-end web app created with react JS and Next.js.',
      priceWithUnit: '$200',
      buttonText: 'Contact',
      anotherOption: 'Or Start 14 Days trail',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle className="option__none" />,
          text: 'Design Customization',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Content Upload',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Responsive Design',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Include Source Code',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Number of Pages: 6',
          isAvailable: true,
        },
        {
          id: 6,
          icon: <IoIosCheckmarkCircle />,
          text: 'Revisions: 2',
          isAvailable: true,
        },
        {
          id: 7,
          icon: <IoIosCheckmarkCircle />,
          text: 'Delivery time: 9 days ',
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      header: 'Suggested',
      headerIcon: <IoIosCheckmarkCircle />,
      name: 'Premium',
      description: 'Complex reactive front-end web app with max 10 pages.',
      priceWithUnit: '$350',
      buttonText: 'Contact',
      anotherOption: 'Or Start 14 Days trail',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle className="option__none" />,
          text: 'Design Customization',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Content Upload',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Responsive Design',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Include Source Code',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Number of Pages: 10',
          isAvailable: true,
        },
        {
          id: 6,
          icon: <IoIosCheckmarkCircle />,
          text: 'Revisions: 3',
          isAvailable: true,
        },
        {
          id: 7,
          icon: <IoIosCheckmarkCircle />,
          text: 'Delivery time: 14 days ',
          isAvailable: true,
        },
      ],
    },
  ],
  annual: [
    {
      id: 1,
      name: 'Blog',
      description: 'Blog website created with Next.js and sanity.io',
      buttonText: 'Contact',
      priceWithUnit: '$350',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Content Management System',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Custom plugins',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Responsive Design',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Include Code Source',
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoIosCheckmarkCircle />,
          text: 'Revisions: 3',
          isAvailable: true,
        },
        {
          id: 6,
          icon: <IoIosCheckmarkCircle />,
          text: 'Delivery time: 14 days',
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      name: 'e-commerce',
      description: 'E-commerce web app created with react JS and Stripe',
      priceWithUnit: '$450',
      buttonText: 'Contact',
      anotherOption: 'Or Start 10 Days trail',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Online Payments with Stripe',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Content Management System',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Responsive Design',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Include Code Source',
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoIosCheckmarkCircle />,
          text: 'Revisions: 3 ',
          isAvailable: true,
        },
        {
          id: 6,
          icon: <IoIosCheckmarkCircle />,
          text: 'Delivery time: 21 days',
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,

      headerIcon: <IoIosCheckmarkCircle />,
      name: 'Custom Web App',
      description: 'Web platform created for client special requirements',
      priceWithUnit: 'negotiated price',
      buttonText: 'Create account',
      anotherOption: 'Or Start 10 Days trail',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Responsive design',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Content Management System',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Online Payments',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'API',
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoIosCheckmarkCircle />,
          text: 'Revisions: 5',
          isAvailable: true,
        },
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Delivery time: about 31 days',
          isAvailable: true,
        },
      ],
    },
  ],
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

export default function Package() {
  const { monthly, annual } = packages;
  const [state, setState] = useState({
    active: 'monthly',
    pricingPlan: monthly,
  });

  const handlePricingPlan = (plan) => {
    if (plan === 'annual') {
      setState({
        active: 'annual',
        pricingPlan: annual,
      });
    } else {
      setState({
        active: 'monthly',
        pricingPlan: monthly,
      });
    }
  };

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    customButtonGroup: <ButtonGroup />,
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: '',
  };

  return (
    <section id="pricing" sx={{ variant: 'section.pricing' }}>
      <Container>
        <SectionHeader slogan="Pricing" title="Approximate cost estimate" />
        <Flex sx={styles.buttonGroup}>
          <Box sx={styles.buttonGroupInner}>
            <button
              className={state.active === 'monthly' ? 'active' : ''}
              type="button"
              aria-label="Monthly"
              onClick={() => handlePricingPlan('monthly')}>
              Front-end
            </button>
            <button
              className={state.active === 'annual' ? 'active' : ''}
              type="button"
              aria-label="annual"
              onClick={() => handlePricingPlan('annual')}>
              Full-stack
            </button>
          </Box>
        </Flex>
        <Box sx={styles.pricingWrapper} className="pricing__wrapper">
          <Carousel {...sliderParams}>
            {state.pricingPlan.map((packageData) => (
              <Box sx={styles.pricingItem} key={packageData.id}>
                <PriceCard data={packageData} />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  pricingWrapper: {
    mb: '-40px',
    mt: '-40px',
    mx: -3,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '&.pricing__wrapper .package__card': {
      '.package__header': {
        animation: `${fadeIn} 0.8s ease-in`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s ease-in`,
      },
      '.package__price': {
        animation: `${fadeIn2} 0.9s ease-in`,
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`,
      },
    },
    '.carousel-container': {
      width: '100%',
      '> ul > li ': {
        display: 'flex',
      },
    },
    '.button__group': {
      display: ['flex', null, null, null, 'none'],
      mb: [4, null, null, null, 0],
    },
  },
  pricingItem: {
    mx: 3,
    display: 'flex',
    flexShrink: 0,
    flex: '1 1 auto',
  },
  buttonGroup: {
    justifyContent: 'center',
    mb: '7',
    mt: ['-15px', '-35px'],
    position: 'relative',
    zIndex: 2,
  },
  buttonGroupInner: {
    display: 'flex',
    padding: '7px',
    margin: '0 auto',
    borderRadius: '5px',
    backgroundColor: '#F7F8FB',
    button: {
      border: 0,
      padding: ['15px 20px', '15px 27px'],
      borderRadius: '5px',
      color: 'text',
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontFamily: 'body',
      letterSpacing: '-0.24px',
      transition: 'all 0.3s',
      '&.active': {
        color: '#0f2137',
        backgroundColor: '#ffffff',
        boxShadow: '0 3px 4px rgba(38, 78, 118, 0.1)',
      },
      '&:focus': {
        outline: 0,
      },
    },
  },
};
