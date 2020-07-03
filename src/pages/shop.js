import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import SearchAndFilter from '../components/SearchAndFilter';
import ShowProduct from '../components/ShowProducts';

const Container = styled.div``;

const Shop = () => {
  return (
    <Layout>
      <Seo title="Shop" />
      <section className="section">
        <Container className="columns is-gapless is-centered">
          <div className="column is-11">
            <div className="columns ">
              <div className="column is-3">
                <SearchAndFilter />
              </div>
              <div className="column is-9">
                <ShowProduct />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};
export default Shop;
