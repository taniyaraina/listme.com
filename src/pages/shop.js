import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import SearchAndFilter from '../components/SearchAndFilter';

const Container = styled.div``;

const Shop = () => {
  return (
    <Layout>
      <Seo title="Shop" />
      <Container className="columns is-gapless is-centered">
        <div className="column is-10">
          <div className="columns">
            <div className="column is-3">
              <SearchAndFilter />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};
export default Shop;
