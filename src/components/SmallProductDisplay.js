import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  .smallFontSize {
    font-size: 0.8rem;
    color: ${theme.darkAccent} !important;
  }
  .lineThrough {
    text-decoration: line-through;
    color: ${theme.textColorLite} !important;
  }
  margin-top: -1.5rem;
`;

const SmallProductDisplay = ({ image, title, cancelledPrice, actualPrice }) => {
  return (
    <Container className="columns is-mobile ">
      <div className="column is-4">
        <img alt="greenBook" src={image} />
      </div>
      <div className="column">
        <h1 className="title is-6">{title}</h1>
        <div className="columns is-gapless is-mobile">
          {cancelledPrice ? (
            <div className="column is-4">
              <h1 className="subtitle is-6 smallFontSize lineThrough">
                {cancelledPrice}
              </h1>
            </div>
          ) : (
            ''
          )}
          <div className="column is-4">
            <h1 className="subtitle is-6 smallFontSize">{actualPrice}</h1>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default SmallProductDisplay;
