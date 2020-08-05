import React from 'react';
import styled from 'styled-components';
import BenefitItem from './BenefitItem';

import { theme } from '../utils/theme';

const Container = styled.div``;

const BusinessAppBenefits = () => {
  return (
    <Container className="columns is-multiline  is-mobile ">
      <div className="column is-12">
        <BenefitItem
          icon="fab fa-bitcoin"
          heading="   Web application providing access to the decentralized peer to peer
              network through anonymously created accounts with optional
              biometric security."
        />
      </div>
      <div className="column is-12">
        <BenefitItem
          icon="fas fa-cube"
          heading="The application feature set includes transaction overview, sending
              and receiving payments, price charts, payee management and a
              indicator displaying."
        />
      </div>
      <div className="column is-12">
        <BenefitItem
          icon="fas fa-chart-bar"
          heading=" Individuals and business entities meeting the requirements for
              becoming a local partner can register with the platform and begin
              trading."
        />
      </div>
    </Container>
  );
};
export default BusinessAppBenefits;
