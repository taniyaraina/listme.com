import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import Categories from '../components/Categories';
import FeatureItem from '../components/FeatureItem';
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
        <Seo title="Home" description="Welcome to ListMe" />
        <Container>
          <HomeHero />
          <Categories />
          <FeatureItem secondary />
          <HowItWorks />
          <InfoCards />
          <DownloadApp />
        </Container>
      </Layout>
    );
  }
}
