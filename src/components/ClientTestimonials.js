import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import { theme } from '../utils/theme';

const Container = styled.div`
  img {
    border-radius: 50px;
  }
  .greenColor {
    color: ${theme.hoverColor} !important;
  }
  .imageColumn {
    margin-right: -25rem;
    transform: translate(-20%, -20%);
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const AnimatedImage = {
  start: {
    opacity: 0,
    transform: 'translateX(-50%)',
  },
  end: {
    opacity: 1,
    transform: 'translateX(0%)',
  },
};

const TheySay = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start('end');
    }
  }, [controls, inView]);
  return (
    <section className="section">
      <Container className="columns is-centered is-vcentered">
        <div className="column is-4">
          <motion.img
            initial="start"
            variants={AnimatedImage}
            animate={controls}
            ref={ref}
            transition={{ duration: 1 }}
            src="images/personComputer.jpg"
            alt="personComputer"
          />
        </div>
        <div className="column is-6">
          <h1 className="subtitle is-5 greenColor">{`< they_say >`}</h1>{' '}
          <h1 className="title is-1 has-text-weight-bold">
            Clients Testimonials
          </h1>
        </div>
        <div className="column is-5 imageColumn">
          <img src="images/letter-q2.png" alt="letterQ" />
        </div>
      </Container>
    </section>
  );
};
export default TheySay;
