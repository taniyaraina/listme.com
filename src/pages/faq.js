import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Information from '../components/Information';

const Container = styled.div``;

const Faq = () => {
  return (
    <Layout>
      <Seo title="Single Product" />
      <Container>
        <Information />
      </Container>
    </Layout>
  );
};
export default Faq;
