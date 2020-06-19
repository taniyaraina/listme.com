import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const WImage = {
  start: {
    marginLeft: '50rem',
    display: 'flex',
    minHeight: '15rem',
    minWidth: '15rem',
  },
  end: {
    marginLeft: '10rem',
  },
};
const TextImage = {
  start: {
    opacity: 1,
    transform: 'translate(20%,-400%)',
  },
  end: {
    opacity: 1,
    transform: 'translate(20%,-280%)',
  },
};

const Container = styled.div`
  .w {
    transform: translate(20%, 2%);
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
        alt="wallapp"
        className="wallapp"
      />
    </Container>
  );
};
export default ImageCollection;
