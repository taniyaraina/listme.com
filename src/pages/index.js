import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import Payments from '../components/Payments';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import InfoCards from '../components/InfoCards';
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
          <Payments />
          <Benefits />
          <HowItWorks />
          <InfoCards />
          <DownloadApp />
        </Container>
      </Layout>
    );
  }
}
