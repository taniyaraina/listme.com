import React from 'react';
import styled from 'styled-components';

import MapHero from '../components/MapHero';
import Layout from '../components/Layout';
import { theme } from '../utils/theme';

const Container = styled.div`
  min-height: 20rem;
  button {
    box-shadow: none;
    background-color: ${theme.darkAccent};
    border-radius: 100px;
    font-weight: bold;
    padding: 0rem 2rem;
  }
`;

const Cart = () => {
  return (
    <Layout>
      <MapHero Title="Cart" subtitle="cart" />
      <Container className="section container">
        <h1 className="title is-6 has-text-weight-normal">
          Your cart is currently empty.
        </h1>
        <button className="button is-primary" type="button">
          Return To Shop
        </button>
      </Container>
    </Layout>
  );
};
export default Cart;
