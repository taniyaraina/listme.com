import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  sup {
    color: ${theme.textColorLite} !important;
  }
  .card {
    border-radius: 50px;
    width: 100%;
    padding: 0.5rem 0rem;
  }
  .coloredCard {
    color: ${theme.backgroundColor};
    display: inline-block;
    padding: 0.5rem 2rem;
    border-radius: 50px;
  }
  .greenCard {
    background-color: ${theme.hoverColor};
  }
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
            <div className="card">
              <section className="section">
                <h1 className="title is-1 has-text-weight-light">
                  <sup>$</sup>19.99
                </h1>
                <h1 className="title is-5">Monthly Package</h1>
                <h1 className="subtitle is-6 greenCard coloredCard">basic</h1>
                <div className="list">
                  <h1 className="title is-5">
                    <span className="bold">25 Analytics</span> Campaign
                  </h1>
                  <h1 className="title is-5">
                    <span className="bold">1300</span> keywords
                  </h1>
                  <h1 className="title is-5">
                    <span className="bold">25 Social</span> Media Reviews
                  </h1>
                  <h1 className="title is-5 faded">
                    <span className="bold">1 Free</span> Optimization
                  </h1>
                  <h1 className="title is-5 faded">
                    <span className="bold">24/7</span> Support
                  </h1>
                </div>
              </section>
            </div>
          </div>
          <div className="column is-4 hoverPull">
            <div className="card">
              <section className="section">
                <h1 className="title is-1 has-text-weight-light">
                  <sup>$</sup>29.99
                </h1>
                <h1 className="title is-5">Monthly Package</h1>
                <h1 className="subtitle is-6 greenCard coloredCard">basic</h1>
                <div className="list">
                  <h1 className="title is-5">
                    <span className="bold">25 Analytics</span> Campaign
                  </h1>
                  <h1 className="title is-5">
                    <span className="bold">1300</span> keywords
                  </h1>
                  <h1 className="title is-5">
                    <span className="bold">25 Social</span> Media Reviews
                  </h1>
                  <h1 className="title is-5 ">
                    <span className="bold">1 Free</span> Optimization
                  </h1>
                  <h1 className="title is-5 faded">
                    <span className="bold">24/7</span> Support
                  </h1>
                </div>
              </section>
            </div>
          </div>
          <div className="column is-4 hoverPull">
            <div className="card">
              <section className="section">
                <h1 className="title is-1 has-text-weight-light">
                  <sup>$</sup>39.99
                </h1>
                <h1 className="title is-5">Monthly Package</h1>
                <h1 className="subtitle is-6 greenCard coloredCard">basic</h1>
                <div className="list">
                  <h1 className="title is-5">
                    <span className="bold">25 Analytics</span> Campaign
                  </h1>
                  <h1 className="title is-5">
                    <span className="bold">1300</span> keywords
                  </h1>
                  <h1 className="title is-5">
                    <span className="bold">25 Social</span> Media Reviews
                  </h1>
                  <h1 className="title is-5 ">
                    <span className="bold">1 Free</span> Optimization
                  </h1>
                  <h1 className="title is-5 ">
                    <span className="bold">24/7</span> Support
                  </h1>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default IndividualPricingPlan;
