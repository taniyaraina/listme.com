import React, { useEffect } from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';
import ShopProductPricingAndImage from './ShopProductPricingAndImage';
import ShopProductDisplayButton from './ShopProductDisplayButton';

const Container = styled.div`
  section {
    border: 1px solid ${theme.borderColor};
    padding-top: 2rem;
    border-radius: 10px;
    height: 25rem;
    transition: 0.5s;
    :hover {
      box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
        0 0 0 1px rgba(10, 10, 10, 0.02);
    }
  }
`;

const ShowProductDisplay = ({
  cancelledPrice,
  lowerPrice,
  actualPrice,
  image,
  title,
  index,
}) => {
  const HoverElements = () => {
    const elem = document.getElementById(`button ${index}`);
    elem.className = 'hovered';
  };
  const RemovedHoverElements = () => {
    const elem = document.getElementById(`button ${index}`);
    elem.className = 'removedHover';
  };
  useEffect(() => {
    document.getElementById(`container ${index}`).onmouseenter = HoverElements;
    document.getElementById(
      `container ${index}`,
    ).onmouseleave = RemovedHoverElements;
  });

  return (
    <Container id={`container ${index}`} className="has-text-centered">
      <section id={`section ${index}`} className="section">
        <ShopProductPricingAndImage
          title={title}
          image={image}
          cancelledPrice={cancelledPrice}
          actualPrice={actualPrice}
          lowerPrice={lowerPrice}
          index={index}
        />
      </section>
      <ShopProductDisplayButton index={index} />
    </Container>
  );
};
export default ShowProductDisplay;
