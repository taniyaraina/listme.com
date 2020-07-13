import React, { useState } from 'react';
import styled from 'styled-components';

import ShopProductDisplay from './ShopProductDisplay';

import { theme } from '../utils/theme';

const Container = styled.div`
  .selectButton {
    width: 100%;
    border-radius: 100px;
    font-weight: bold;
    /* box-shadow: 0px 15px 39px rgba(0, 0, 0, 0.2) !important; */
    box-shadow: none !important;
    color: ${theme.lightGrey} !important;
    border-width: 0px;
    background-color: transparent;
    transition: 0.6s;
    :hover {
      color: ${theme.darkAccent}!important;
    }
  }
  .buttonDiv {
    border: 0.1px solid ${theme.lightGrey};
    border-radius: 100px;
    @media screen and (max-width: 768px) {
      border-radius: 20px;
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
  .description {
    box-shadow: ${props =>
      props.selectedButton === 'description'
        ? '0px 15px 39px rgba(0, 0, 0, 0.2) !important'
        : ''};
    color: ${props =>
      props.selectedButton === 'description'
        ? `${theme.darkAccent} !important`
        : ''};
  }
  .additional {
    box-shadow: ${props =>
      props.selectedButton === 'additional'
        ? '0px 15px 39px rgba(0, 0, 0, 0.2) !important'
        : ''};
    color: ${props =>
      props.selectedButton === 'additional'
        ? `${theme.darkAccent} !important`
        : ''};
  }
  .reviews {
    box-shadow: ${props =>
      props.selectedButton === 'reviews'
        ? '0px 15px 39px rgba(0, 0, 0, 0.2) !important'
        : ''};
    color: ${props =>
      props.selectedButton === 'reviews'
        ? `${theme.darkAccent} !important`
        : ''};
  }
  .line {
    line-height: 1.8rem;
  }
`;

const Data = [
  {
    image: 'images/greenBook.jpg',
    title: 'Top 10 App Tips',
    actualPrice: '18.00',
  },
  {
    image: 'images/purpleBook.jpg',
    title: 'Ico For Dummies',
    cancelledPrice: '20.00',
    actualPrice: '18.00',
  },
  {
    image: 'images/purpleBook2.jpg',
    title: 'Ico The Smart Way',
    actualPrice: '25.00',
  },
  {
    image: 'images/purpleBook.jpg',
    title: 'App Successful Secrets',
    actualPrice: '25.00',
  },
];

const ProductInfoAndRelated = () => {
  const [selectedButton, _setSelectedButton] = useState('description');

  const RenderContent = option => {
    switch (option) {
      case 'description':
        return (
          <div className="has-text-centered pt-3 pb-6">
            <h1 className="subtitle is-6 line">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </h1>
          </div>
        );
      case 'additional':
        return (
          <div className=" py-4 columns is-multiline  is-mobile has-text-left">
            <div className="column is-2">
              <h1 className="title is-6">Dimensions</h1>
            </div>
            <div className="column is-10">
              <h1 className="subtitle is-6">10 x 12 x 0.5 in</h1>
            </div>
            <div className="column is-2">
              <h1 className="title is-6">Color</h1>
            </div>
            <div className="column is-10">
              <h1 className="subtitle is-6">Gray</h1>
            </div>
          </div>
        );
      default:
        return true;
    }
  };

  return (
    <Container selectedButton={selectedButton} className="columns is-centered">
      <div className="column is-10">
        <div className="columns is-centered pt-4">
          <div className="column is-6">
            <div className="columns is-centered px-1 py-1 is-gapless has-text-centered buttonDiv">
              <div className="column is-3">
                <button
                  onClick={() => _setSelectedButton('description')}
                  type="button"
                  className="button selectButton description"
                >
                  Description
                </button>
              </div>
              <div className="column is-6">
                <button
                  onClick={() => _setSelectedButton('additional')}
                  type="button"
                  className="button selectButton additional"
                >
                  Additional Information
                </button>
              </div>
              <div className="column is-3">
                <button
                  onClick={() => _setSelectedButton('reviews')}
                  type="button"
                  className="button selectButton reviews"
                >
                  Reviews
                </button>
              </div>
            </div>
          </div>
        </div>
        {RenderContent(selectedButton)}
        <h1 className="title is-3 has-text-left">Related Products</h1>
        <div className="columns is-multiline">
          {Data.map((item, index) => (
            <div className="column is-3">
              <ShopProductDisplay
                actualPrice={item.actualPrice}
                image={item.image}
                title={item.title}
                cancelledPrice={item.cancelledPrice}
                lowerPrice={item.lowerPrice}
                index={index}
                small
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
export default ProductInfoAndRelated;
