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
    color: ${theme.darkAccent} !important;
    font-size: 1.3rem !important;
  }
  .head {
    font-size: ${props => props.theme.fontSizeMedium}px !important;
  }
  .wrap {
    width: 30% !important;
  }
  .is-6 {
    font-size: 1rem;
    line-height: 1.7rem;
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
    title: 'Create Payment Address',
    subtitle:
      'Provide your payout wallet address and callback URL to WallApp API.',
  },
  {
    number: '02',
    title: 'Ask for Payment',
    subtitle: 'Show customer the wallet address as well as the payment amount.',
  },
  {
    number: '03',
    title: 'Wait for Payment',
    subtitle: 'Confirmation on blockchain may take a minute or two. Wait it.',
  },
];

const Data2 = [
  {
    number: '04',
    title: 'Get Payment Notification',
    subtitle:
      'Callbacks are sent to the URL you specified. You can process order.',
  },
  {
    number: '05',
    title: 'Get Your Paid',
    subtitle: 'Payment is sent to the payout wallet immediately. Take money.',
  },
  {
    number: '06',
    title: 'Enjoy Our App',
    subtitle:
      'Confirmation on blockchain may take a minute or two. Wait for it.',
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
        className="columns is-gapless is-multiline is-mobile card"
        reverse={reverse}
      >
        <div className="column is-2">
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
            className={`title is-6 has-text-left has-text-weight-light ${
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
            <img src="/images/iphone-1.png" alt="iphone" />
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
