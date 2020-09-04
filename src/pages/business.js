import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import MapHero from '../components/MapHero';
import OurWorkWith from '../components/OurWorkWith';
import ClientTestimonials from '../components/ClientTestimonials';
import OurPartner from '../components/OurPartner';
import Event from '../components/Event';
import FeatureItem from '../components/FeatureItem';
import CreativeInterface from '../components/CreativeInterface';
import StepAppProcess from '../components/StepAppProcess';

const Container = styled.div``;

const Business = () => {
  return (
    <Layout>
      <Seo title="Business Users" />
      <Container>
        <MapHero Title="Business Users" subtitle="Business Users" />
        <Event />
        <OurWorkWith />
        <FeatureItem />
        <StepAppProcess />
        <OurPartner />
        <ClientTestimonials />
        <CreativeInterface />
      </Container>
    </Layout>
  );
};
export default Business;
