import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const WImage = {
  start: {
    marginLeft: '50rem',
    display: 'flex',
    objectFit: 'cover',
  },
  end: {
    marginLeft: '5rem',
  },
};
const TextImage = {
  start: {
    opacity: 1,
    transform: 'translate(20%,-400%)',
  },
  end: {
    opacity: 1,
    transform: 'translate(20%,-300%)',
  },
};
const PhoneImage = {
  start: {
    opacity: 0,
    transform: 'translate(0,0%)',
  },
  end: {
    opacity: 1,
    transform: 'translate(-15%,-100%)',
  },
};
const PhoneImage1 = {
  start: {
    opacity: 0,
    transform: 'translate(0,-400%)',
  },
  end: {
    opacity: 1,
    transform: 'translate(-15%,-200%)',
  },
};
const PhoneImage2 = {
  start: {
    opacity: 0,
    transform: 'translate(0,-500%)',
  },
  end: {
    opacity: 1,
    transform: 'translate(-15%,-300%)',
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
    min-height: 35rem;
    min-width: 35rem;
    @media screen and (max-width: 600px) {
      min-height: 15rem;
      min-width: 20rem;
    }
  }
  .wallapp {
    @media screen and (max-width: 738px) {
      display: none;
    }
  }
  .topMargin {
    /* margin-top: 16rem; */
    max-height: 30%;
  }
`;

const ImageCollection = () => {
  return (
    <Container className="container">
      <figure className="">
        <motion.img
          initial="start"
          animate="end"
          variants={WImage}
          transition={{ duration: 1 }}
          src="images/w.png"
          alt="w"
        />
      </figure>
      <motion.img
        initial="start"
        animate="end"
        variants={TextImage}
        transition={{ delay: 1, duration: 0.5 }}
        src="images/wallapp.png"
        className="wallapp"
      />
      <motion.img
        initial="start"
        animate="end"
        variants={PhoneImage}
        transition={{ delay: 3, duration: 1 }}
        src="images/phone.png"
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
