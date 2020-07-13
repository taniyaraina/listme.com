import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';

const CardWrapper = styled.div`
  border-radius: 30px;
  box-shadow: 0px 15px 38px rgba(0, 0, 0, 0.1);
  .purple {
    color: ${theme.darkAccent} !important;
  }

  .icon {
    padding-top: 1rem;
    padding-bottom: 2rem;
    color: ${theme.hoverColor} !important;
  }
`;

const PaymentCard = () => {
  return (
    <CardWrapper className="card">
      <div className="card-content">
        <figure className="mage is-32x32">
          <img src="/images/contact/toolip-one.png" alt="icon" />
        </figure>
        <h1 className="subtitle is-4 has-text-weight-bold">Any Payments</h1>
        <h1 className="subtitle is-5 has-text-grey-lighter">
          Accept Crypto payments from your online customers on your smartphone.
        </h1>
        <a className="subtitle is-5 has-text-grey-lighter">
          Accept Crypto payments from your online customers on your smartphone.
        </a>

        <a className="purple">{`< Read More >`}</a>
      </div>
    </CardWrapper>
  );
};
export default PaymentCard;
