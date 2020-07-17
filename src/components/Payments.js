import React from 'react';
import styled from 'styled-components';

import PaymentCard from './PaymentCard';

import { theme } from '../utils/theme';

const Container = styled.div``;

const MovingDownColumn = styled.div`
  margin-top: 70px;
`;
const ContentWrapper = styled.div`
  margin-top: 70px;
  .lightGreen {
    color: ${theme.hoverColor} !important;
  }
  .has-text-weight-normal {
    font-size: 0.9rem;
    line-height: 1.2rem;
  }
  img {
    border-radius: 100px;
  }
`;

const Payments = () => {
  return (
    <Container className="section">
      <div className="container">
        <div className="columns has-text-centered is-variable is-6">
          <div className="column is-3">
            <PaymentCard />
          </div>
          <MovingDownColumn className="column is-3">
            <PaymentCard />
          </MovingDownColumn>
          <ContentWrapper className="column is-6 has-text-left ">
            <h1 className="title is-6 lightGreen">{`< about_app >`}</h1>
            <h1 className="title is-3 has-text-weight-bold">
              Get Started with Crypto Payments
            </h1>
            <h1 className="title has-text-weight-normal">
              We have created a few plugins for the most popular shopping carts
              to make integrations fast and easy, even for a non-technical user.
              <span className="boldText">
                Get start accepting Crypto Payments today!
              </span>
            </h1>
            <h1 className="purple">{`< Read More >`}</h1>
            <div className="columns is-mobile paddingTop is-vcentered">
              <div className="column is-3">
                <img src="images/girl.jpg" alt="girl" />
              </div>
              <div className="column">
                <h1 className="title is-6 has-text-weight-bold">
                  Jina Nilson,<span className="purple">UI Designer</span>
                </h1>
              </div>
            </div>
          </ContentWrapper>
        </div>
      </div>
    </Container>
  );
};
export default Payments;
