import React from 'react';
import styled from 'styled-components';
import BenefitItem from './BenefitItem';

const Container = styled.div``;

const PersonalAppBenefits = () => {
  return (
    <Container className="columns is-multiline is-mobile ">
      <div className="column is-12">
        <BenefitItem
          icon="fas fa-shopping-bag"
          heading=" The application feature set includes transaction overview, sending
              and receiving payments, price charts, payee management and a
              indicator displaying."
        />
      </div>
      <div className="column is-12">
        <BenefitItem
          icon="fas fa-box-open"
          heading=" The application feature set includes transaction overview, sending
              and receiving payments, price charts, payee management and a
              indicator displaying."
        />
      </div>
      <div className="column is-12">
        <BenefitItem
          icon="fas fa-dollar-sign"
          heading=" The application feature set includes transaction overview, sending
              and receiving payments, price charts, payee management and a
              indicator displaying."
        />
      </div>
    </Container>
  );
};
export default PersonalAppBenefits;
