import React from 'react';
import styled from 'styled-components';

import ShopProductDisplay from './ShopProductDisplay';

const Container = styled.div``;

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
  return (
    <Container className="columns is-centered">
      <div className="column is-10">
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
