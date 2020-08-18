import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Phone = {
  start: {
    transform: 'translate(100%,-10%)',
  },
  end: {
    transform: 'translate(10%,-10%)',
  },
};

const Credit = {
  start: {
    transform: 'translate(-100%,-10%)',
  },
  end: {
    transform: 'translate(-80%,-10%)',
  },
};

const Square = {
  start: {
    transform: 'translate(-150%,-10%)',
    opacity: 0,
  },
  end: {
    transform: 'translate(-200%,-10%)',
    opacity: 1,
  },
};

const Container = styled.div`
  display: flex;
`;

const ImageCollection2 = () => {
  return (
    <Container>
      <motion.img
        initial="start"
        animate="end"
        variants={Phone}
        src="images/Event-Image1.png"
        alt="phone"
      />
      <motion.img
        initial="start"
        animate="end"
        variants={Credit}
        src="images/Event-Image2.png"
        alt="credit"
      />
      <motion.img
        initial="start"
        animate="end"
        variants={Square}
        src="images/Event-Image3.png"
      />
    </Container>
  );
};
export default ImageCollection2;
