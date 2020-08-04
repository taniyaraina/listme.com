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
  .margin {
    margin-bottom: 1rem !important;
  }
  .wallet-background {
    min-width: 5.5rem;
    min-height: 4.5rem;
    max-height: 5.5rem;
    max-width: 6.5rem;
    background-color: ${theme.mainBrandColor};
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 7px 18px !important ;
  }
  button {
    height: 3rem;
    width: 10rem;
  }
`;

const IconWrapper = styled.a`
  margin: 10px 6px 0px 6px;

  color: ${theme.mainBrandColor};
  :hover {
    color: ${theme.hoverColor}!important;
    transition: color 0.25s;
  }
`;

const PaySpend = () => {
  return (
    <Container>
      <motion.div
        initial="start"
        animate="end"
        variants={ImageEntry}
        transition={{ delay: 3, duration: 1 }}
        className="wallet-background"
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
      <div className="my-5">
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
      >
        <PurpleButton
          className="has-text-weight-semibold"
          title="How it Works"
          color={theme.textColor}
        />
        <>
          <IconWrapper href="/" className="icon">
            <i className="fab fa-apple" />
          </IconWrapper>
          <IconWrapper href="/" className="icon">
            <i className="fab fa-android" />
          </IconWrapper>
        </>
      </motion.div>
    </Container>
  );
};
export default PaySpend;
