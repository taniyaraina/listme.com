import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  h1 {
    font-size: 0.8rem !important;
  }
  .card {
    transition: 0.5s;
    padding: 0.5rem;
    margin-right: 0.2rem !important;
    margin-bottom: 0.3rem;
    box-shadow: none;
    background-color: ${theme.lightColor};
    border-radius: 10px;
    :hover {
      background-color: ${theme.backgroundColor};
      box-shadow: 0px 6px 13px 0px rgba(145, 145, 145, 0.3);
      h1 {
        color: ${theme.darkAccent} !important;
      }
    }
  }
`;

const ProductTags = () => {
  return (
    <Container className="columns is-multiline is-mobile">
      <div className="card column is-4 has-text-centered">
        <h1 className="title is-6 has-text-weight-light">analysis</h1>
      </div>
      <div className="card column is-3 has-text-centered">
        <h1 className="title is-6 has-text-weight-light">app</h1>
      </div>
      <div className="card column is-6 has-text-centered">
        <h1 className="title is-6 has-text-weight-light">crptocurrency</h1>
      </div>
      <div className="card column is-4 has-text-centered">
        <h1 className="title is-6 has-text-weight-light">desktop</h1>
      </div>
      <div className="card column is-2 has-text-centered">
        <h1 className="title is-6 has-text-weight-light">ico</h1>
      </div>
      <div className="card column is-4 has-text-centered">
        <h1 className="title is-6 has-text-weight-light">mobile</h1>
      </div>
      <div className="card column is-5 has-text-centered">
        <h1 className="title is-6 has-text-weight-light">technology</h1>
      </div>
      <div className="card column is-4 has-text-centered">
        <h1 className="title is-6 has-text-weight-light">wallet</h1>
      </div>
    </Container>
  );
};
export default ProductTags;
