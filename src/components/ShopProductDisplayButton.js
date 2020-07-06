import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  .hoveredButton {
    border-radius: 100px;
    border-width: 0px;
    height: 2.5rem;
    width: 13rem;
    transform: translateX(-1rem);
    background-color: transparent;
    box-shadow: none !important;
    color: ${theme.backgroundColor};
  }
  .shoppingCart {
    padding: 1rem;
    height: 2.5rem;
    width: 2.5em;
    border-radius: 100px;
    z-index: 2;
    color: ${theme.darkAccent};
  }
  .hoveredDiv {
    background-image: radial-gradient(
      circle farthest-corner at 100% 150%,
      #d75dbc 10%,
      #6a4bc4 50%
    ) !important;
    border-radius: 100px;
  }
  .opacityNone {
    opacity: 0;
    transform: translateY(1rem);
  }
  @keyframes example {
    0% {
      opacity: 0;
      transform: translateY(1rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0rem);
    }
  }
  .hovered {
    animation-name: example;
    animation-duration: 0.6s;
  }
  @keyframes example2 {
    0% {
      opacity: 1;
      transform: translateY(0rem);
    }
    100% {
      opacity: 0;
      transform: translateY(1rem);
    }
  }
  .removedHover {
    opacity: 0;
    animation-name: example2;
    animation-duration: 0.6s;
  }
`;

const ShopProductDisplayButton = ({ index }) => {
  return (
    <Container>
      <div id={`button ${index}`} className="opacityNone">
        <div className="  columns is-vcentered is-centered  is-mobile">
          <div className="column is-8 hoveredDiv">
            <div className="  columns is-vcentered is-centered is-mobile ">
              <span className="icon shoppingCart card">
                <i className="fas fa-shopping-cart" />
              </span>
              <button className="button hoveredButton" type="button">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default ShopProductDisplayButton;
