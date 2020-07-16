import React from 'react';
import styled from 'styled-components';

import MapHero from '../components/MapHero';
import Layout from '../components/Layout';
import { theme } from '../utils/theme';

import BlogGridCard from '../components/blog-gridCard';

const Container = styled.div`
  min-height: 20rem;
`;

const Data = [1, 2, 4, 5, 6, 7, 8, 9, 10];

const BlogGrid = () => {
  return (
    <Layout>
      <MapHero Title="Blog Grid" subtitle="Blog Grid" />
      <Container className="section container">
        <div className="columns is-multiline">
          {Data.map(() => (
            <div className="column is-4">
              <BlogGridCard />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
};
export default BlogGrid;
