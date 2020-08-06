import React from 'react';
import styled from 'styled-components';
import BenefitItem from './BenefitItem';

const Container = styled.div``;

const PersonalAppBenefits = () => {
  return (
    <Container className="columns is-multiline is-mobile ">
      <div className="column is-12">
        <BenefitItem
          icon="/images/shopping-bag (2).png"
          heading=" The application feature set includes transaction overview, sending
              and receiving payments, price charts, payee management and a
              indicator displaying."
        />
      </div>
      <div className="column is-12">
        <BenefitItem
          icon="/images/gift-icon.png"
          heading=" The application feature set includes transaction overview, sending
              and receiving payments, price charts, payee management and a
              indicator displaying."
        />
      </div>
      <div className="column is-12">
        <BenefitItem
          icon="/images/money-icon.png"
          heading=" The application feature set includes transaction overview, sending
              and receiving payments, price charts, payee management and a
              indicator displaying."
        />
      </div>
    </Container>
  );
};
export default PersonalAppBenefits;
