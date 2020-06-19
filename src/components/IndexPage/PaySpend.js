import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PurpleButton from '../elements/PurpleButton';
import { theme } from '../../utils/theme';

const WalletImageBounce = {
  start: {
    position: 'absolute',
    minWidth: '5rem',
    minHeight: '5rem',
  },
  end: {
    minWidth: '6rem',
    minHeight: '6rem',
  },
};
const TextAnimate = {
  start: {
    opacity: 0,
    transform: 'rotate(-3deg)',
    letterSpacing: '1rem',
    fontStyle: 'italic',
    marginLeft: '10rem',
  },
  end: {
    opacity: 1,
    fontStyle: 'normal',
    transform: 'rotate(0deg)',
    letterSpacing: '0rem',
    marginLeft: '0rem',
  },
};
const ImageEntry = {
  start: {
    transform: 'translateY(-90%)',
    opacity: 0,
  },
  end: {
    transform: 'translateY(0%)',
    opacity: 1,
  },
};

const Container = styled.div`
  @media screen and (max-width: 738px) {
    padding-top: 0rem;
    .purple {
      max-width: 1rem;
    }
    .is-1 {
      font-size: 1.2rem;
    }
  }
  .margin {
    margin-bottom: 1rem !important;
  }
  .purple {
    min-width: 5rem;
    min-height: 5rem;
    align-items: center;
    justify-content: center;
    padding-top: 0.3rem;
    background-color: ${theme.mainBrandColor};
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 7px 18px !important ;
  }
  button {
    height: 3rem;
    width: 10rem;
  }
  padding-top: 2rem;
`;

const PaySpend = () => {
  // const props = {
  //   to: async next => {
  //     await next({ width: '100%' });
  //     await next({ width: '80%' });
  //   },
  //   from: { width: '100%' },
  // };

  return (
    <Container className="columns is-multiline  is-gapless ">
      <motion.div
        initial="start"
        animate="end"
        variants={ImageEntry}
        transition={{ delay: 3, duration: 1 }}
        className="column is-1 margin purple"
      >
        <motion.figure
          initial="start"
          animate="end"
          variants={WalletImageBounce}
          transition={{ yoyo: Infinity, delay: 4, duration: 1 }}
          className="image is-square"
        >
          <img alt="wallet" src="images/wallet.png" />
        </motion.figure>
      </motion.div>
      <div className="column is-12 margin">
        <motion.h1
          initial="start"
          animate="end"
          variants={TextAnimate}
          transition={{ delay: 2, duration: 1 }}
          className="title is-1 has-text-weight-bold"
        >
          Pay, Spend & Store Bitcoins on <br />
          Your Terms
        </motion.h1>
      </div>
      <div className="column is-4">
        <PurpleButton title="How it Works" />
      </div>
    </Container>
  );
};
export default PaySpend;
