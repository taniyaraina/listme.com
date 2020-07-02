import React from 'react';
import styled from 'styled-components';
import UseAnimations from 'react-useanimations';

import SmallProductDisplay from './SmallProductDisplay';
import ProductTags from './ProductTags';

import { theme } from '../utils/theme';

const Data = [
  { title: 'Apps', number: 3 },
  { title: 'Business', number: 5 },
  { title: 'Crypto', number: 4 },
  { title: 'ICO', number: 6 },
  { title: 'Mobile', number: 4 },
  { title: 'News', number: 5 },
];

const Products = [
  {
    image: 'images/greenBook.jpg',
    title: 'Ico for Dummies',
    cancelledPrice: '$20.00',
    actualPrice: '$18.00',
  },
  {
    image: 'images/purpleBook.jpg',
    title: 'Top 10 App Tips',
    actualPrice: '$18.00',
  },
  {
    image: 'images/purpleBook2.jpg',
    title: 'How to Use Ico for Business',
    cancelledPrice: '$3.00',
    actualPrice: '$2.00',
  },
];

const Container = styled.div`
  input {
    border-width: 0px;
    width: 85%;
    border-radius: 100px;
    position: relative;
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
  .greenColorBorder {
    border: 2px solid ${theme.hoverColor};
    height: 1px !important;
    width: 40px !important;
    margin-top: -1.65rem;
    margin-bottom: 1rem;
  }
  .grey {
    color: ${theme.textColorLite} !important;
  }
  .icon {
    color: ${theme.darkAccent}!important;
  }
  .productCategory {
    transition: 0.4s;
    :hover {
      color: ${theme.darkAccent} !important;
    }
  }
  .marginTopNegative {
    margin-top: -1.5rem;
  }
`;

const SearchAndFilter = () => {
  return (
    <Container className="columns is-multiline">
      <div className="column is-12">
        <div className="inputBox">
          <input className="input" placeholder="Search Products" />
          <UseAnimations
            animationKey="searchToX"
            size={25}
            style={{ marginRight: '1rem' }}
          />
        </div>
      </div>
      <div className="column is-12 has-text-centered marginTopNegative">
        <h1 className="title is-6 filterTitle">FILTER BY PRICE</h1>
        <div className="greenColorBorder" />
      </div>

      <div className="column is-12 has-text-left marginTopNegative">
        <h1 className="title is-6 filterTitle">PRODUCT CATEGORIES</h1>
        <div className="greenColorBorder has-text-centered" />
        {Data.map(item => (
          <h1 className="subtitle is-6 productCategory">
            <span className="icon is-size-6">
              <i className="fas fa-plus" />
            </span>{' '}
            {item.title} <span className="grey">({item.number})</span>
          </h1>
        ))}
      </div>
      <div className="column is-12 has-text-centered marginTopNegative">
        <h1 className="title is-6 filterTitle">PRODUCTS</h1>
        <div className="greenColorBorder" />
      </div>
      {Products.map(item => (
        <SmallProductDisplay
          image={item.image}
          title={item.title}
          cancelledPrice={item.cancelledPrice}
          actualPrice={item.actualPrice}
        />
      ))}
      <div className="column is-10 has-text-centered marginTopNegative">
        <h1 className="title is-6 filterTitle">PRODUCT TAGS</h1>
        <div className="greenColorBorder" />
        <ProductTags />
      </div>
      <div className="column is-10 has-text-centered marginTopNegative">
        <h1 className="title is-6 filterTitle">CART</h1>
        <div className="greenColorBorder" />
        <h1 className="title is-6 has-text-weight-light">
          No products in the cart
        </h1>
      </div>
    </Container>
  );
};
export default SearchAndFilter;
