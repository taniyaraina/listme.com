import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import MapHero from '../components/MapHero';
import InfoCards from '../components/InfoCards';
import ClientTestimonials from '../components/ClientTestimonials';
import Features from '../components/Features';
import AboutApp from '../components/AboutApp';
import OurPartner from '../components/OurPartner';

const Container = styled.div`
  overflow-x: hidden;
`;
const Wrapper = styled.div`
  margin-bottom: 5rem;
  margin-top: 2rem;
`;

const About = () => {
  return (
    <Layout>
      <Seo title="about" />
      <Container>
        <MapHero Title="About App" subtitle="About App" />
        <AboutApp />
        <ClientTestimonials />
        <InfoCards />
        <Features />
        <Wrapper>
          <OurPartner />
        </Wrapper>
      </Container>
    </Layout>
  );
};
export default About;
