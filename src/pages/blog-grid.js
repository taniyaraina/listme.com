import React from 'react';
import styled from 'styled-components';

import MapHero from '../components/MapHero';
import Layout from '../components/Layout';
import { theme } from '../utils/theme';

const Container = styled.div`
  min-height: 20rem;
`;

const Cart = () => {
  return (
    <Layout>
      <MapHero Title="Blog Grid" subtitle="Blog Grid" />
      <Container className="section container"></Container>
    </Layout>
  );
};
export default Cart;
