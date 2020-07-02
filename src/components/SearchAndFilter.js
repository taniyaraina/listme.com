import React from 'react';
import styled from 'styled-components';

import UseAnimations from 'react-useanimations';

import { theme } from '../utils/theme';

const Container = styled.div`
  input {
    border-width: 0px;
    width: 13rem;
    border-radius: 100px;
    box-shadow: none;
    background-color: transparent;
  }
  .inputBox {
    display: flex;
    border-radius: 100px;
    box-shadow: inset 0px 14px 20px 0px rgba(0, 0, 0, 0.08);
  }
  .filterTitle {
    margin-top: 2rem;
    text-align: center;
    padding-bottom: 1.5rem;
    border: 0px solid ${theme.textColorLite};
    width: 15rem;
    border-bottom-width: 1px;
  }
`;

const SearchAndFilter = () => {
  return (
    <Container className="columns is-multiline is-centered">
      <div className="inputBox">
        <input className="input" placeholder="Search Products" />
        <UseAnimations
          animationKey="searchToX"
          size={25}
          style={{ marginRight: '1rem' }}
        />
      </div>
      <h1 className="title is-5 filterTitle">FILTER BY PRICE</h1>
    </Container>
  );
};
export default SearchAndFilter;
