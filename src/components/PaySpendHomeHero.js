import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import PurpleButton from './elements/PurpleButton';
import { theme } from '../utils/theme';

const WalletImageBounce = {
  start: {
    scale: 1.2,
    marginTop: '0.5rem',
  },
  end: {
    scale: 1.4,
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
  @media screen and (max-width: 768px) {
    padding-top: 0rem;
    .purple {
      max-width: 1rem;
    }
    .is-1 {
      font-size: 100%;
    }
  }
  .title {
    font-size: 3.4375rem;
    font-family: Poppins;
    line-height: 1.3;
  }
  .margin {
    margin-bottom: 1rem !important;
  }
  .wallet {
    width: 20%;
  }
  button {
    height: 3rem;
    width: 10rem;
  }
`;

const PaySpend = () => {
  return (
    <Container>
      <motion.img
        initial="start"
        animate="end"
        variants={ImageEntry}
        transition={{ delay: 3, duration: 1 }}
        alt="wallet"
        src="images/Logowallet.png"
        className="wallet"
      >
        {/* <motion.figure
          initial="start"
          animate="end"
          variants={WalletImageBounce}
          transition={{ yoyo: Infinity, delay: 4, duration: 1 }}
        >
        </motion.figure> */}
      </motion.img>
      <div className="my-5">
        <motion.h1
          initial="start"
          animate="end"
          variants={TextAnimate}
          transition={{ delay: 2, duration: 1 }}
          className="has-text-weight-bold title is-size-6-mobile"
        >
          Wallet Free with <br />
          security in mind
        </motion.h1>
      </div>
      <div className="my-5">
        <motion.h1
          initial="start"
          animate="end"
          variants={TextAnimate}
          transition={{ delay: 2, duration: 1 }}
          className="title has-text-weight-bold is-size-5 is-size-6-mobile"
        >
          About time to enjoy nights in the way of 2020
        </motion.h1>
      </div>
      <motion.div
        initial="start"
        animate="end"
        variants={TextAnimate}
        transition={{ delay: 2, duration: 1 }}
      >
        <PurpleButton
          className="has-text-weight-semibold"
          title="DOWNLOAD"
          color={theme.textColor}
        />
      </motion.div>
    </Container>
  );
};
export default PaySpend;
