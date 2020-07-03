import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';
import ShopProductDisplay from './ShopProductDisplay';

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
  {
    image: 'images/greenBook.jpg',
    title: 'How To Use Ico for business',
    actualPrice: '25.00',
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
  {
    image: 'images/greenBook.jpg',
    title: 'How To Use Ico for business',
    actualPrice: '25.00',
    lowerPrice: '20.00',
  },
];

const ShowProduct = () => {
  return (
    <Container>
      <div className="columns">
        <div className="column is-4 paddingTop">
          <h1 className="subtitle is-6 grey">Show 1-9 of 12 results</h1>
        </div>
        <div className="column is-3" />
        <div className="column is-5">
          <div className="select is-rounded">
            <select>
              <option className="grey">Sort by price:high to low</option>
              <option className="grey">With options</option>
            </select>
          </div>
        </div>
      </div>
      <div className="columns is-multiline ">
        {Data.map(item => (
          <div className="column is-4">
            <ShopProductDisplay
              actualPrice={item.actualPrice}
              image={item.image}
              title={item.title}
              cancelledPrice={item.cancelledPrice}
              lowerPrice={item.lowerPrice}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};
export default ShowProduct;
