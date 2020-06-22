import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PurpleButton from './elements/PurpleButton';
import { theme } from '../utils/theme';

const WalletImageBounce = {
  start: {
    scale: 1.5,
    marginTop: '0.5rem',
  },
  end: {
    scale: 2,
  },
};
const TextAnimate = {
  start: {
    opacity: 0,
    transform: 'translateX(100%)',
  },
  end: {
    opacity: 1,
    transform: 'translateX(0%)',
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
      font-size: 100%;
    }
  }
  .margin {
    margin-bottom: 1rem !important;
  }
  .purple {
    min-width: 3.5rem;
    min-height: 2.5rem;
    max-height: 3.5rem;
    max-width: 4.5rem;
    background-color: ${theme.mainBrandColor};
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 7px 18px !important ;
  }
  button {
    height: 3rem;
    width: 10rem;
  }
  padding-top: 2rem;
  .columns {
    padding-top: 3rem;
    @media screen and (max-width: 1200px) {
      padding-top: 0rem;
    }
  }
`;

const PaySpend = () => {
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
      <motion.div
        initial="start"
        animate="end"
        variants={TextAnimate}
        transition={{ delay: 2, duration: 1 }}
        className="column is-4"
      >
        <PurpleButton className="is-medium" title="How it Works" />
      </motion.div>
    </Container>
  );
};
export default PaySpend;
