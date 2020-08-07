import React from 'react';
import styled from 'styled-components';

import MapHero from '../components/MapHero';
import Layout from '../components/Layout';
import { theme } from '../utils/theme';
import BlogGridCard from '../components/BlogGridCard';

const Container = styled.div`
  min-height: 20rem;
  .wrapper {
    margin-top: 3rem;
  }
  .button {
    border-radius: 2rem;
    padding: 1.5rem 2rem 1.5rem 2rem;
    background: radial-gradient(
      circle farthest-corner at 100% 150%,
      #d75dbc 10%,
      #6a4bc4 50%
    );
    :hover {
      background: ${theme.darkAccent};
    }
  }
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
        <div className="has-text-centered wrapper">
          <a href="/" className="button is-large has-text-white is-size-6">
            Load More
          </a>
        </div>
      </Container>
    </Layout>
  );
};
export default BlogGrid;
