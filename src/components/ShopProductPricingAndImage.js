import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  .smallFont {
    font-size: 0.8rem;
  }
  .bottomPadding {
    margin-bottom: 1rem;
  }
  .cancelledPrice {
    text-decoration: line-through;
    color: ${theme.textColorLite} !important;
  }
  .actualPrice {
    color: ${theme.darkAccent} !important;
  }
  .saleText {
    background-color: ${theme.red};
    color: ${theme.backgroundColor} !important;
    padding: 0.1rem 0.5rem;
    border-radius: 5px;
    transform: translateY(20px);
    margin-top: -2.5rem;
  }
  .book {
    z-index: -2;
    margin-top: -2rem;
  }
`;

const ShopProductPricingAndImage = ({
  cancelledPrice,
  image,
  lowerPrice,
  title,
  actualPrice,
}) => {
  return (
    <Container className="columns is-multiline is-mobile is-gapless is-centered has-text-centered">
      <div className="column is-12 has-text-left sale">
        {cancelledPrice ? (
          <div
            style={{
              backgroundColor: theme.borderColor,
              display: 'inline-block',
              borderRadius: 10,
            }}
          >
            <h1 className="title is-6 saleText">Sale</h1>
          </div>
        ) : (
          ''
        )}

        <img alt="book" src={image} className={cancelledPrice ? 'book' : ''} />
      </div>
      <div className="column is-10 ">
        <h1 className="title is-6 has-text-weight-bold bottomPadding">
          {title}
        </h1>
      </div>
      {cancelledPrice ? (
        <div className="column is-4">
          <h1 className="title is-5 has-text-weight-light cancelledPrice">
            ${cancelledPrice}
          </h1>
        </div>
      ) : (
        ''
      )}
      {lowerPrice ? (
        <div className="column is-5">
          <h1 className="title is-5 has-text-weight-light actualPrice has-text-left">
            ${lowerPrice} -
          </h1>
        </div>
      ) : (
        ''
      )}

      <div className="column is-4">
        <h1 className="title is-5 has-text-weight-light actualPrice">
          ${actualPrice}
        </h1>
      </div>
    </Container>
  );
};
export default ShopProductPricingAndImage;
