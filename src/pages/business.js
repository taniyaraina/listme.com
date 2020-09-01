import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
//import MapHero from '../components/MapHero';
import OurWorkWith from '../components/OurWorkWith';
import ClientTestimonials from '../components/ClientTestimonials';
import OurPartner from '../components/OurPartner';
import Event from '../components/Event';
import GlobelInformation from '../components/GlobelInformation';
import CreativeInterface from '../components/CreativeInterface';
import StepAppProcess from '../components/StepAppProcess';
import Header from '../components/Header';
import SocialIcons from '../components/SocialIconsHomeHero';
import Button from '../components/elements/PurpleButton';
import PurpleButton from '../components/elements/PurpleButton';
import { rgb } from 'polished';

const TextImage = {
  start: {
    opacity: 0,
    transform: 'translate(-50%,-60%)',
  },
  end: {
    transform: 'translate(70%,5%)',
    opacity: 1,
  },
};

const PhoneImage = {
  start: {
    display: 'left',
    opacity: 0,
    transform: 'translate(-50%,90%)',
  },
  end: {
    opacity: 1,
    transform: 'translate(239%,-165%)',
  },
};

const Container = styled.div`
.HomeLogo{
  width: 70%;
  height: 30%;
  object-fit: contain;
  @media screen and (max-width: 738px) {
    opacity: 0;
  }
}

.topMargin {
  height: 550px;
  @media screen and (max-width: 738px) {
    height: 300px;
  }

`;

const HeroImages = () => {
  return (
    <Container>
      <motion.img
        initial="start"
        animate="end"
        variants={TextImage}
        transition={{ delay: 1, duration: 1 }}
        src="/images/Event-Image1.png"
        className="HomeLogo"
      />

      <motion.img
        initial="start"
        animate="end"
        variants={PhoneImage}
        transition={{ delay: 1, duration: 1 }}
        src="/images/Event-Image2.png"
        className="topMargin"
      />
    </Container>
  );
};

const Content = () => {
  return (
    <Container>
      <div
        style={{
          margin: 250,
          bottom: '-30px',
          position: 'absolute',
          padding: 50,
          width: '100%',
        }}
      >
        <p
          style={{
            fontSize: '18px',
            lineHeight: '22px',
            fontWeight: '500',
            color: "white",
            position: 'absolute',
            top: '10px',
            left: '280px',
            margin: '10px',
          }}
        >
          {' '}
          Be One Step ahead
        </p>
        <br />
        <br />
        <p
          style={{
            fontSize: '55px',
            fontWeight: '700',
            position: 'absolute',
            left: '100px',
          }}
        >
          EVENTS MADE SIMPLE
        </p>
        <br />
        <br />
        <br />
        <br />
        <p
          style={{
            width: '100%',
            display: 'block',
            position: 'absolute',
            fontWeight: '700',
            left: 100,
            fontSize: '20px',
          }}
        >
          Never have we seen a service managing venues digitally with{' '}
        </p>
        <br />
        <br />
        <br></br>
        <p
          style={{
            width: '100%',
            position: 'absolute',
            left: 200,
            fontWeight: '700',
            fontSize: '20px',
          }}
        >
          good reasons to get customers on board
        </p>
        <br />
      </div>
    </Container>
  );
};

const Business = () => {
  return (
    <Layout>
      <Seo title="Business Users" />
      <div style={{ position: 'absolute', top: '50%' }}>
        <SocialIcons />
      </div>
      <Container>
        <HeroImages />

        <Content />
        <div style={{ position: 'absolute', left: '600px', top: '450px' }}>
          <Button title="Signup" />
        </div>
        {/* <MapHero/> */}
        <div style={{ position: 'absolute', top: '1100px' }}>
          <Event />
        </div>
        <OurWorkWith />
        <GlobelInformation />
        <StepAppProcess />
        <OurPartner />
        <ClientTestimonials />
        <CreativeInterface />
      </Container>
    </Layout>
  );
};
export default Business;
