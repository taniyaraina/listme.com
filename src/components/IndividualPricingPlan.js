import React from 'react';
import styled from 'styled-components';
import PricingCard from './PricingCard';

import { theme } from '../utils/theme';

const Container = styled.div`
  sup {
    color: ${theme.lightGrey} !important;
    vertical-align: super;
    padding-right: 0.5rem;
    font-weight: 400;
  }
  .card {
    border-radius: 50px;
    width: 100%;
    padding: 0.5rem 0rem;
  }
  /* .coloredCard {
    /* color: ${theme.backgroundColor}; */
    display: inline-block;
    padding: 0.5rem 2rem;
    border-radius: 50px;
  } */
  /* .greenCard {
    background-color: ${theme.hoverColor};
  } */
  .bold {
    font-weight: bold;
  }
  .list {
    padding-top: 2rem;
  }
  .faded {
    opacity: 0.3;
  }
  section {
    background-color: ${theme.lightColor};
    border-radius: 50px;
    margin: 0.5rem;
    position: relative;
  }
  .hoverPull {
    transition: 1s;
    :hover {
      margin-top: -2rem;
    }
  }
`;

const IndividualPricingPlan = () => {
  return (
    <Container className="columns is-centered">
      <div className="column is-12">
        <div className="columns is-centered">
          <div className="column is-4 hoverPull">
            <PricingCard
              price="19.99"
              packages="Monthly Package"
              button="basic"
              buttonColor={theme.lightGreen}
              Analytics="25 Analytics"
              Keywords="1,300"
              Media="25 Social"
              Optimization="1 Free"
            />
          </div>
          <div className="column is-4 hoverPull">
            <PricingCard
              price="29.99"
              packages="Year Package"
              button="ultra"
              buttonColor="#AA55C0"
              Analytics="28 Analytics"
              Keywords="1,600"
              Media="27 Social"
              Optimization="3 Free"
            />
          </div>
          <div className="column is-4 hoverPull">
            <PricingCard
              price="39.99"
              packages="Monthly Package"
              button="pro"
              buttonColor="#664BC4"
              Analytics="30 Analytics"
              Keywords="1,900"
              Media="29 Social"
              Optimization="5 Free"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default IndividualPricingPlan;
