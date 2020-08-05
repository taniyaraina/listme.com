import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  .card {
    border-radius: 20px;
    box-shadow: 0px 15px 38px rgba(0, 0, 0, 0.1);
    padding: 2rem 0rem;
    transition: 0.5s;
    :hover {
      margin-top: -1.5rem;
    }
  }
  .check {
    background-color: ${theme.darkAccent};
    color: ${theme.backgroundColor};
    padding: 1.4rem;
    border-radius: 100px;
    box-shadow: 0px 15px 38px rgba(0, 0, 0, 0.1);
  }
  .arrow {
    transition: 0.5s;
    :hover {
      color: ${theme.darkAccent};
    }
  }
  .subtitle {
    margin-top: -15px !important;
  }
`;

const InfoCards = () => {
  return (
    <section className="section">
      <div className=" container">
        <Container className="columns is-centered">
          <div className="column is-4 margin">
            <div className="columns card is-gapless  is-vcentered is-mobile">
              <div className="column is-3 has-text-centered">
                <span className="icon check">
                  {' '}
                  <i className="fas fa-check" />
                </span>
              </div>
              <div className="column is-7">
                {' '}
                <h1 className="title is-5">Implement Ideas</h1>
                <h1 className="subtitle is-6  has-text-weight-normal">
                  On your website
                </h1>
              </div>
              <div className="column is-2">
                <span className="icon is-size-4 arrow">
                  <i className="fas fa-arrow-right" />
                </span>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="columns card is-gapless is-vcentered is-mobile">
              <div className="column is-3 has-text-centered">
                <span className="icon check">
                  {' '}
                  <i className="fas fa-check" />
                </span>
              </div>
              <div className="column is-7">
                {' '}
                <h1 className="title is-5">Zero Fraud</h1>
                <h1 className="subtitle is-6  has-text-weight-normal">
                  Gaurantee no chargebacks
                </h1>
              </div>
              <div className="column is-2">
                <span className="icon is-size-4 arrow">
                  <i className="fas fa-arrow-right" />
                </span>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="columns card is-gapless is-vcentered is-mobile">
              <div className="column is-3 has-text-centered">
                <span className="icon check">
                  {' '}
                  <i className="fas fa-check" />
                </span>
              </div>
              <div className="column is-7">
                {' '}
                <h1 className="title is-5">Privacy & Security</h1>
                <h1 className="subtitle is-6  has-text-weight-normal">
                  Customer and merchant
                </h1>
              </div>
              <div className="column is-2">
                <span className="icon is-size-4 arrow">
                  <i className="fas fa-arrow-right" />
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
export default InfoCards;
