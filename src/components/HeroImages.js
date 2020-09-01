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
    transform: 'translate(-20%,-100%)',
  },
  end: {
    
    transform: 'translate(-170%,-10%)',
    opacity: 1,
  
  },
};
const PhoneImage = {
  start: {
    display:'right',
    opacity: 0,
    transform: 'translate(-380%,100%)',
  },
  end: {
    opacity: 1,
    transform: 'translate(-250%,10%)',
  },
};
// const PhoneImage1 = {
//   start: {
//     opacity: 0,
//     transform: 'translate(-380%,100%)',
//   },
//   end: {
//     opacity: 1,
//     transform: 'translate(-480%,10%)',
//   },
// };
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
  .HomeLogo{
    width: 300%;
    height: 100%;
    object-fit: contain;
    @media screen and (max-width: 738px) {
      opacity: 0;
    }
  }
  .topMargin {
    /* margin-top: 16rem; */
    height: 700px;
    @media screen and (max-width: 768px) {
      height: 285px;
    }
  }
  display: flex;
  /* flex-direction: row; */


  







`;
const HeroImages = () => {
  return (
    <Container className="container">
      <motion.img
        initial="start"
        animate="end"
        variants={WImage}
        transition={{ duration: 1 }}
        src="/images/HomeHero-1.png"
        alt="w"
        className="w card1"
      />
      <motion.img
         initial="start"
         animate="end"
        variants={TextImage}
        transition={{ delay: 1, duration: 1 }}
        src="/images/HomeLogo.png"
        className="HomeLogo"
        
      />
       <motion.img
        initial="start"
        animate="end"
        variants={PhoneImage}
        transition={{ delay: 3, duration: 1 }}
        src="/images/Event-Image1.png"
        className="topMargin"
      />

      {/* <motion.img
        initial="start"
        animate="end"
        variants={PhoneImage1}
        transition={{ delay: 3.5, duration: 1 }}
        src="images/phone2.png"
        className="topMargin"
      />  */}
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
export default HeroImages;
