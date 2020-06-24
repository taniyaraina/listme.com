import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  .icon {
    color: ${theme.darkAccent};
  }
  span {
    height: 3rem;
    width: 3rem;
  }
  padding-top: 1rem;
  h1 {
    color: ${theme.textColorLite} !important;
  }
`;

const BusinessAppBenefits = () => {
  return (
    <Container className="columns is-multiline  is-mobile ">
      <div className="column is-12">
        <div className="columns ">
          <div className="column is-2 ">
            <span className="icon is-size-2">
              <i className="fab fa-bitcoin" />
            </span>
          </div>
          <div className="column is-10">
            <h1 className="subtitle is-6">
              Web application providing access to the decentralized peer to peer
              network through anonymously created accounts with optional
              biometric security.
            </h1>
          </div>
        </div>
      </div>
      <div className="column is-12">
        <div className="columns">
          <div className="column is-2">
            <span className="icon is-size-2">
              {' '}
              <i className="fas fa-cube" />
            </span>
          </div>
          <div className="column is-10">
            <h1 className="subtitle is-6">
              The application feature set includes transaction overview, sending
              and receiving payments, price charts, payee management and a
              indicator displaying.
            </h1>
          </div>
        </div>
      </div>
      <div className="column is-12">
        <div className="columns">
          <div className="column is-2">
            <span className="icon is-size-2">
              {' '}
              <i className="fas fa-chart-bar" />
            </span>
          </div>
          <div className="column is-10">
            <h1 className="subtitle is-6">
              Individuals and business entities meeting the requirements for
              becoming a local partner can register with the platform and begin
              trading.
            </h1>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default BusinessAppBenefits;
