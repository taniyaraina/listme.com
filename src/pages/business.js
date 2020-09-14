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

const Container = styled.div`
  background: #191a23;
  height: 60rem;
`;

const Business = () => {
  return (
    <Layout dark navHeight>
      <Seo title="Business Users" />
      <Container>
        <MapHero
          heading="Be one step ahead
							"
          Title="Events Made Simple"
          subtitle="Never have we seen a service managing venues digitally with good reason to get customers on board."
        />
      </Container>
      <Event />
      <OurWorkWith />
      <FeatureItem />
      <StepAppProcess />
      <OurPartner />
      <ClientTestimonials />
      <CreativeInterface />
    </Layout>
  );
};
export default Business;
