import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const WImage = {
  start: {
    position: 'relative',
    right: -300,
    opacity: 0,
    display: 'flex',
  },
  end: {
    right: -80,
    opacity: 1,
  },
};
const TextImage = {
  start: {
    opacity: 0,
    transform: 'translate(-80%,-200%)',
  },
  end: {
    transform: 'translate(-80%,-10%)',
    opacity: 1,
  },
};
const PhoneImage = {
  start: {
    opacity: 0,
    transform: 'translate(-380%,100%)',
  },
  end: {
    opacity: 1,
    transform: 'translate(-380%,10%)',
  },
};
const PhoneImage1 = {
  start: {
    opacity: 0,
    transform: 'translate(-380%,100%)',
  },
  end: {
    opacity: 1,
    transform: 'translate(-480%,10%)',
  },
};
const PhoneImage2 = {
  start: {
    opacity: 0,
    transform: 'translate(-380%,-500%)',
  },
  end: {
    opacity: 1,
    transform: 'translate(-380%,-100%)',
  },
};
const PhoneImage3 = {
  start: {
    opacity: 0,
    transform: 'translate(0,-500%)',
  },
  end: {
    opacity: 1,
    transform: 'translate(-15%,-400%)',
  },
};
const PhoneImage4 = {
  start: {
    opacity: 0,
    transform: 'translate(0,-600%)',
  },
  end: {
    opacity: 1,
    transform: 'translate(-15%,-500%)',
  },
};

const Container = styled.div`
  .w {
    width: 100%;
    height: 100%;
    object-fit: contain;
    @media screen and (max-width: 600px) {
      min-height: 10rem;
      min-width: 25rem;
    }
  }
  .wallapp {
    width: 100%;
    height: 100%;
    object-fit: contain;
    @media screen and (max-width: 738px) {
      opacity: 0;
    }
  }
  .topMargin {
    /* margin-top: 16rem; */
    max-height: 30%;
  }
  display: flex;
  /* flex-direction: row; */
`;
const ImageCollection = () => {
  return (
    <Container className="container">
      <motion.img
        initial="start"
        animate="end"
        variants={WImage}
        transition={{ duration: 1 }}
        src="/images/w.png"
        alt="w"
        className="w card1"
      />
      <motion.img
        initial="start"
        animate="end"
        variants={TextImage}
        transition={{ delay: 1, duration: 1 }}
        src="/images/wallapp.png"
        className="wallapp"
      />
      <motion.img
        initial="start"
        animate="end"
        variants={PhoneImage}
        transition={{ delay: 3, duration: 1 }}
        src="/images/phone.png"
        className="topMargin"
      />

      <motion.img
        initial="start"
        animate="end"
        variants={PhoneImage1}
        transition={{ delay: 3.5, duration: 1 }}
        src="images/phone2.png"
        className="topMargin"
      />
      <motion.img
        initial="start"
        animate="end"
        variants={PhoneImage2}
        transition={{ delay: 3.5, duration: 1 }}
        src="images/phone3.png"
        className="topMargin"
      />
      <motion.img
        initial="start"
        animate="end"
        variants={PhoneImage3}
        transition={{ delay: 3.5, duration: 1 }}
        src="images/phone4.png"
        className="topMargin"
      />
      <motion.img
        initial="start"
        animate="end"
        variants={PhoneImage4}
        transition={{ delay: 3.5, duration: 1 }}
        src="images/phone5.png"
        className="topMargin"
      />
    </Container>
  );
};
export default ImageCollection;
