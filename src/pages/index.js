import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import Bitcoin from '../components/Bitcoins';
import Payments from '../components/Payments';
import Benefits from '../components/Benefits';
import Number from '../components/Number';
import HowItWorks from '../components/HowItWorks';
import ClientTestimonials from '../components/ClientTestimonials';
import InfoCards from '../components/InfoCards';
import CreativeInterface from '../components/CreativeInterface';
import OurPartner from '../components/OurPartner';
import PricingPlans from '../components/PricingPlans';
import DownloadApp from '../components/DownloadApp';

const Container = styled.div`
  overflow-x: hidden;
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <Container>
          <HomeHero />
          <Bitcoin />
          <Payments />
          <Benefits />
          <Number />
          <HowItWorks />
          <ClientTestimonials />
          <InfoCards />
          <CreativeInterface />
          <OurPartner />
          <PricingPlans />
          <DownloadApp />
        </Container>
      </Layout>
    );
  }
}
