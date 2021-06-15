import { NextSeo } from 'next-seo';
import HomeBanner from '../components/home/HomeBanner';

import Layout from '../components/Layout';
import config from '../utils/config';

const Index = () => {
  return (
    <Layout>
      <NextSeo
        title={config.siteName}
        description="A short description goes here."
      />
      <HomeBanner />
    </Layout>
  );
};

export default Index;
