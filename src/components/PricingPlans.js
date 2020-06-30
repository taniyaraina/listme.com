import React, { useState } from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

import IndividualPricingPlan from './IndividualPricingPlan';
import BusinessPricingPlan from './BusinessPricingPlan';

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
  .buttonCollection {
    margin-bottom: 3rem;
    border: 1px solid ${theme.textColorLite};
    display: inline-block;
    border-radius: 100px;
    padding: 0.2rem;
    button {
      border-radius: 100px;
      border-width: 0px;
    }
    .individual {
      color: ${props =>
        props.tab ? theme.darkAccent : theme.textColorLite} !important;
    }
    .business {
      color: ${props =>
        props.tab ? theme.textColorLite : theme.darkAccent} !important;
    }
  }
`;

const PricingPlans = () => {
  const [tab, setTab] = useState(true);
  const TabTrue = () => setTab(true);
  const TabFalse = () => setTab(false);

  return (
    <Container tab={tab} className="has-text-centered">
      <section className="section">
        <h1 className="title greenColor is-5">{`< pricing_plans >`}</h1>
        <div className="columns is-centered">
          <div className="column is-10">
            <h1 className="title is-1 has-text-weight-bold">
              The Best Solutions for Agencies and Business Companies
            </h1>
            <div className="buttonCollection">
              <button
                onClick={() => TabTrue()}
                className="button is-medium individual"
                type="button"
              >
                Individual
              </button>
              <button
                onClick={() => TabFalse()}
                className="button is-medium business"
                type="button"
              >
                Business
              </button>
            </div>
            {tab ? <IndividualPricingPlan /> : <BusinessPricingPlan />}
          </div>
        </div>
      </section>
    </Container>
  );
};
export default PricingPlans;
