import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

import IndividualPricingPlan from './IndividualPricingPlan';

const Container = styled.div`
  overflow: hidden;
  .greenColor {
    color: ${theme.hoverColor} !important;
  }
  .section {
    @media screen and (min-width: 769px) {
      padding-top: 4rem !important;
    }
  }
`;

const PricingPlans = () => {
  return (
    <Container className="has-text-centered">
      <section className="section">
        <h1 className="title greenColor is-5">{`< pricing_plans >`}</h1>
        <div className="columns is-centered">
          <div className="column is-10">
            <h1 className="title is-1 has-text-weight-bold">
              The Best Solutions for Agencies and Business Companies
            </h1>
            <IndividualPricingPlan />
          </div>
        </div>
      </section>
    </Container>
  );
};
export default PricingPlans;
