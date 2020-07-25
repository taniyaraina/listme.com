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
    padding: 0.2rem 1.2rem 0.2rem 1.2rem;
    .button {
      border-radius: 100px;
      border-width: 0px;
      background-color: transparent;
      box-shadow: none !important;
    }
    .individual {
      box-shadow: ${props =>
        props.tab ? '0px 15px 39px rgba(0, 0, 0, 0.2) !important' : ''};
      color: ${props =>
        props.tab ? theme.darkAccent : theme.lightGrey} !important;
    }
    .business {
      box-shadow: ${props =>
        props.tab ? '' : '0px 15px 39px rgba(0, 0, 0, 0.2) !important'};
      color: ${props =>
        props.tab ? theme.lightGrey : theme.darkAccent} !important;
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
          <div className="column is-11">
            <div className="columns is-centered">
              <div className="column is-7">
                <h1 className="title is-2 has-text-weight-bold is-size-4-touch">
                  The Best Solutions for Agencies and Business Companies
                </h1>
              </div>
            </div>
            <div className="buttonCollection">
              <button
                onClick={() => TabTrue()}
                className="button is-medium is-size-6 individual"
                type="button"
              >
                Individual
              </button>
              <button
                onClick={() => TabFalse()}
                className="button is-medium is-size-6 business"
                type="button"
              >
                Agency
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
