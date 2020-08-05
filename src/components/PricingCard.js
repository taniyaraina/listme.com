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
const Button = styled.button`
  background-color: ${props => props.color};
`;

const PricingCard = ({
  price,
  packages,
  button,
  buttonColor,
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
        <Button
          className="button is-rounded has-text-white"
          color={buttonColor}
        >
          {button}
        </Button>
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
        <PurpleButton
          title="Get Started"
          className=""
          color={theme.textColor}
        />
      </section>
    </Container>
  );
};
export default PricingCard;
