import React from 'react';
import styled from 'styled-components';
import PurpleButton from './elements/PurpleButton';

import { theme } from '../utils/theme';

const Container = styled.div`
  color: ${props =>
    props.buttonColor ? props.color : props.theme.textColorLite};
  .pack {
    margin-bottom: 2.5rem;
  }
  .list {
    margin-bottom: 3rem;
    font-family: ${theme.primaryFontFamily};
    font-weight: 600;
  }
`;

const PricingCard = ({
  price,
  packages,
  Analytics,
  Keywords,
  Media,
  Optimization,
}) => {
  return (
    <Container className="card">
      <section className="section">
        <h1 className="title is-1 has-text-weight-light">
          <sup className="is-size-4">$</sup>
          {price}
        </h1>
        <h1 className="title is-5 is-size-6 has-text-weight-normal pack">
          {packages}
        </h1>
        <h1 className="subtitle is-6 greenCard coloredCard">basic</h1>
        <div className="list">
          <h1 className="title is-5 is-size-5 has-text-weight-light ">
            <span className="has-text-weight-normal">{Analytics}</span> Campaign
          </h1>
          <h1 className="title is-5 is-size-5 has-text-weight-light">
            <span className="has-text-weight-normal">{Keywords}</span> keywords
          </h1>
          <h1 className="title is-5 is-size-5 has-text-weight-light">
            <span className="has-text-weight-normal">{Media}</span> Media
            Reviews
          </h1>
          <h1 className="title is-5 is-size-5 faded has-text-weight-light">
            <span className="has-text-weight-normal">{Optimization}</span>
            Optimization
          </h1>
          <h1 className="title is-5 is-size-5 faded has-text-weight-light">
            <span className="has-text-weight-normal">24/7</span> Support
          </h1>
        </div>
        <PurpleButton title="Get Started" className="is-size-5" />
      </section>
    </Container>
  );
};
export default PricingCard;
