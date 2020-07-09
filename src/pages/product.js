import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import ProductComponent from '../components/ProductComponent';

const Container = styled.div``;

const Product = () => {
  return (
    <Layout>
      <Seo title="Single Product" />
      <Container>
        <ProductComponent />
      </Container>
    </Layout>
  );
};
export default Product;
