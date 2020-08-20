import React from 'react';
import styled from 'styled-components';
import PaymentCard from './PaymentCard';
import Heading from './elements/Heading';
import { theme } from '../utils/theme';

const MovingDownColumn = styled.div`
  margin-top: 70px;
`;
const ContentWrapper = styled.div`
  margin-top: 6rem;
  .title.is-6 {
    color: ${theme.hoverColor} !important;
    margin-bottom: 1rem !important;
  }
  .title.is-3 {
    line-height: 1.3 !important;
  }
  .has-text-weight-normal {
    font-size: 0.9rem;
    line-height: 1.2rem;
  }
  img {
    border-radius: 100px;
  }
  p {
    line-height: 2 !important;
  }
`;

const Event = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns has-text-centered is-variable is-4">
          <div className="column is-4">
            <PaymentCard
              icon="fas fa-mobile-alt"
              title="Paperless"
              subtitle="We are more than a paperless solution. We help you become paperless"
            />
          </div>
          <MovingDownColumn className="column is-4">
            <PaymentCard
              icon="fas fa-user"
              title="Cashless"
              subtitle="Frictionless “Uber” like social payment method"
            />
          </MovingDownColumn>
          <ContentWrapper className="column is-4 has-text-left mt-0 ">
            <Heading
              subtitle="Let the fun begin"
              title="All you need for venue management"
            />
            <p className="title has-text-weight-normal mt-4">
              ListMe app is the one-stop service for managing venues. From
              branding, management to engaging customers. We are the Uber of
              nightlife.
            </p>
          </ContentWrapper>
        </div>
      </div>
    </section>
  );
};
export default Event;
