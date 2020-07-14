import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { theme } from '../utils/theme';

const CardWrapper = styled.div`
  border-radius: 30px;
  box-shadow: 0px 15px 38px rgba(0, 0, 0, 0.1);
  h2 {
    color: ${theme.darkAccent} !important;
    :hover {
      color: ${theme.hoverColor} !important;
      transition: all 0.3s ease-in-out;
    }
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
        <h1 className="title is-5 has-text-weight-semibold">Any Payments</h1>
        <div className="content">
          <h1 className="subtitle is-6 has-text-grey-lighter">
            Accept Crypto payments from your online customers on your
            smartphone.
          </h1>
        </div>
        <Link to="/">
          <h2 className="subtitle is-6 has-text-weight-bold">{`< Read More >`}</h2>
        </Link>
      </div>
    </CardWrapper>
  );
};
export default PaymentCard;
