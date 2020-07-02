import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  .paddingTop {
    padding-top: 1.3rem;
  }
  .grey {
    color: ${theme.textColorLite} !important;
  }
  .select {
    box-shadow: inset 0px 14px 20px 0px rgba(0, 0, 0, 0.08) !important;
    border-radius: 100px;
    width: 100%;
  }
  select {
    background-color: transparent;
    width: 100%;
    color: ${theme.textColorLite} !important;
  }
`;

const ShowProduct = () => {
  return (
    <Container className="columns">
      <div className="column is-4 paddingTop">
        <h1 className="subtitle is-6 grey">Show 1-9 of 12 results</h1>
      </div>
      <div className="column is-4" />
      <div className="column is-5">
        <div className="select is-rounded">
          <select>
            <option className="grey">Sort by price:high to low</option>
            <option className="grey">With options</option>
          </select>
        </div>
      </div>
    </Container>
  );
};
export default ShowProduct;
