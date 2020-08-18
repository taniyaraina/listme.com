import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import MapHero from '../components/MapHero';
import OurWorkWith from '../components/OurWorkWith';
import ClientTestimonials from '../components/ClientTestimonials';
import Event from '../components/Event';
import GlobelInformation from '../components/GlobelInformation';
import CreativeInterface from '../components/CreativeInterface';
import StepAppProcess from '../components/StepAppProcess';

const Container = styled.div``;

const Business = () => {
  return (
    <Layout>
      <Seo title="about" />
      <Container>
        <MapHero Title="Business App" subtitle="Business App" />
        <Event />
        <OurWorkWith />
        <GlobelInformation />
        <StepAppProcess />
        <ClientTestimonials />
        <CreativeInterface />
      </Container>
    </Layout>
  );
};
export default Business;
