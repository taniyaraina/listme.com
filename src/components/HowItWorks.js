import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Heading from './elements/Heading';
import { theme } from '../utils/theme';

const Container = styled.div`
  margin-top: 4rem;
  .reverse {
    flex-direction: row-reverse;
    text-align: right;
  }
  .header {
    margin-bottom: 3rem;
  }
  .purple {
    color: #664bc4;
    font-size: 1.3rem !important;
  }
  .head {
    font-size: ${props => props.theme.fontSizeMedium}px !important;
  }
  .wrap {
    width: 30% !important;
    margin-top: 5rem;
  }
  .is-6 {
    font-size: 1rem;
    line-height: 30px;
    margin-top: -0.5rem;
    font-family: ${theme.secondaryFontFamily};
  }
  .card {
    padding: 1rem;
    margin-bottom: 1rem;
    transition: 1s;
    box-shadow: none;
    border-radius: 30px;
    :hover {
      box-shadow: inset 0px 14px 20px 0px rgba(0, 0, 0, 0.08);
    }
  }
  @media only screen and (max-width: 768px) {
    .wrap {
      width: 100% !important;
    }
  }
`;

const Wrapper = styled.div`
  flex-direction: ${props => (props.reverse ? 'row-reverse' : '')};
  margin-bottom: 3rem !important;
`;

const Data1 = [
  {
    number: '01',
    title: 'Get the APP',
    subtitle: 'You are just a moment away from thousands of events to explore.',
  },
  {
    number: '02',
    title: ' Check credentials',
    subtitle: 'Now your ID is with ListMe and partners.',
  },
  {
    number: '03',
    title: 'ListMet',
    subtitle: 'Find events that suit you & get guest-listed.',
  },
];

const Data2 = [
  {
    number: '04',
    title: 'Entry Payments',
    subtitle:
      'Automatically make payment to the venue once you are checked in..',
  },
  {
    number: '05',
    title: 'Organize night with friends',
    subtitle:
      'Discuss event options with friends and make social planning easier.',
  },
  {
    number: '06',
    title: 'Enjoy the Night',
    subtitle: 'Enjoy the night with your phone only this time.',
  },
];

const LeftAnimatedDiv = {
  start: {
    transform: 'translateX(-20%)',
    opacity: 0,
  },
  end: {
    transform: 'translateX(0%)',
    opacity: 1,
  },
};

const RightAnimatedDiv = {
  start: {
    transform: 'translateX(20%)',
    opacity: 0,
  },
  end: {
    transform: 'translateX(0%)',
    opacity: 1,
  },
};

const ListItem = ({ number, title, subtitle, variants, reverse }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start('end');
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="start"
      variants={variants}
    >
      <Wrapper
        className="columns is-variable is-3 is-mobile card"
        reverse={reverse}
      >
        <div className="column is-3">
          <h1 className="title is-size-6 purple">{number}</h1>
        </div>
        <div className="column is-10">
          <h1
            className={` title is-size-6  has-text-weight-bold head ${
              reverse ? 'has-text-right' : 'has-text-left'
            }`}
          >
            {title}
          </h1>
          <h1
            className={`is-6 has-text-left has-text-weight-normal ${
              reverse ? 'has-text-right' : 'has-text-left'
            }`}
          >
            {subtitle}
          </h1>
        </div>
      </Wrapper>
    </motion.div>
  );
};

const HowItWorks = () => {
  return (
    <Container>
      <section className="section">
        <div className="columns is-multiline is-vcentered is-centered has-text-centered">
          <div className="column is-12">
            <div className="columns is-centered">
              <div className="column is-4 header">
                <Heading
                  subtitle="How ListMe Works"
                  title="Our Application Interface"
                />
              </div>
            </div>
          </div>
          <div className="column is-4 wrap">
            {Data1.map(item => (
              <ListItem
                number={item.number}
                title={item.title}
                subtitle={item.subtitle}
                variants={LeftAnimatedDiv}
              />
            ))}
          </div>
          <div className="column is-4">
            <img
              src="https://thelistmeapp.com/wp-content/uploads/2020/04/001-3.png"
              alt="imageSlider"
            />
          </div>
          <div className="column is-4 wrap">
            {Data2.map(item => (
              <ListItem
                number={item.number}
                title={item.title}
                subtitle={item.subtitle}
                variants={RightAnimatedDiv}
                reverse
              />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};
export default HowItWorks;
