import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import Bitcoin from '../components/Bitcoins';
import Payments from '../components/Payments';
import Benefits from '../components/Benefits';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <HomeHero />
        <Bitcoin />
        <Payments />
        <Benefits />
      </Layout>
    );
  }
}
