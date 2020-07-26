import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import MapHero from '../components/MapHero';
import InfoCards from '../components/InfoCards';
import OurPartner from '../components/OurPartner';
import AboutApp from '../components/AboutApp';

const About = () => {
  return (
    <Layout>
      <Seo title="about" />
      <MapHero Title="About App" subtitle="About App" />
      <AboutApp />
      <InfoCards />
      <OurPartner />
    </Layout>
  );
};
export default About;
