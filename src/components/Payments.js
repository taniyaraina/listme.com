import React from 'react';
import styled from 'styled-components';
import Heading from './elements/Heading';
import PaymentCard from './PaymentCard';

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
    line-height: 1.875 !important;
    font-family: ${props => props.theme.secondaryFontFamily};
  }
`;

const Payments = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns has-text-centered">
          <div className="column is-4">
            <PaymentCard
              icon="fas fa-mobile-alt"
              title="Wallet Free"
              subtitle="With ListMe, your phone is the only thing you need to enjoy a night."
            />
          </div>
          <MovingDownColumn className="column is-4">
            <PaymentCard
              icon="fas fa-user"
              title="Discover"
              subtitle="Discover somewhere new and meet a new dance partner."
            />
          </MovingDownColumn>
          <ContentWrapper className="column is-4 has-text-left ">
            <Heading
              subtitle="Let the fun begin"
              title="Get listed for night events in 2020!"
            />
            <p className="is-size-6 has-text-weight-normal mt-4">
              Tailor your unique nightlife, meet new people and explore new
              venues all on ListMe
            </p>
          </ContentWrapper>
        </div>
      </div>
    </section>
  );
};
export default Payments;
