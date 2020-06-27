import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { theme } from '../utils/theme';

const Container = styled.div`
  .greenColor {
    color: ${theme.hoverColor} !important;
  }
  .reverse {
    flex-direction: row-reverse;
    text-align: right;
  }
  .purple {
    color: ${theme.darkAccent} !important;
  }
  .is-6 {
    font-size: 0.8rem;
    line-height: 1.3rem;
    margin-top: -0.5rem;
  }
  .is-5 {
    font-size: 1rem;
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

const ListItem = ({ number, title, subtitle, variants }) => {
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
      className="columns is-gapless is-multiline is-mobile card"
    >
      <div className="column is-2">
        <h1 className="title is-5 purple">{number}</h1>
      </div>
      <div className="column is-10">
        <h1 className="title is-5  has-text-left has-text-weight-bold">
          {title}
        </h1>
        <h1 className="title is-6 has-text-left has-text-weight-light">
          {subtitle}
        </h1>
      </div>
    </motion.div>
  );
};

const HowItWorks = () => {
  return (
    <Container>
      <section className="section">
        <div className="columns is-multiline is-vcentered is-centered has-text-centered">
          <div className="column is-12">
            <h1 className="title is-4 has-text-weight-normal greenColor">{`< how_it_works >`}</h1>
            <div className="columns is-centered">
              <div className="column is-4">
                <h1 className="title is-3 has-text-weight-bold">
                  Get Started in a Few Minutes with WallApp
                </h1>
              </div>
            </div>
          </div>
          <div className="column is-3">
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
            <img src="images/iphone-1.png" alt="iphone" />
          </div>
          <div className="column is-3">
            {Data2.map(item => (
              <ListItem
                number={item.number}
                title={item.title}
                subtitle={item.subtitle}
                variants={RightAnimatedDiv}
              />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};
export default HowItWorks;
