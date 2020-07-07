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
  img {
    scale: 2;
  }
  .saleBackground {
    background-color: ${theme.borderColor};
    display: inline-block;
    border-radius: 10;
  }
  @keyframes animation {
    25% {
      opacity: 1;
    }
    50% {
      opacity: 0;
      transform: translateX(100px);
    }
    75% {
      opacity: 0;
      transform: translateX(-100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  :hover {
    .imageBook {
      animation-name: animation;
      animation-duration: 0.5s;
    }
  }
`;

const ShopProductPricingAndImage = ({
  cancelledPrice,
  image,
  lowerPrice,
  title,
  actualPrice,
  index,
}) => {
  return (
    <Container className="columns is-multiline is-mobile is-gapless is-centered has-text-centered">
      <div className="column is-12 has-text-left sale">
        {cancelledPrice ? (
          <div className="saleBackground">
            <h1 className="title is-6 saleText">Sale</h1>
          </div>
        ) : (
          ''
        )}

        <img
          alt="book"
          src={image}
          id={`image ${index}`}
          transition={{ duration: 1 }}
          className={cancelledPrice ? 'book imageBook' : 'imageBook'}
        />
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
