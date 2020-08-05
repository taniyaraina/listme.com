import React from 'react';
import styled from 'styled-components';

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
  }
`;

const Article = styled.article`
  align-items: center;
  .content h1 {
    font-size: 18px !important;
  }
  span {
    color: ${theme.mainBrandColor} !important;
  }
`;

const Payments = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns has-text-centered is-variable is-8">
          <div className="column is-4">
            <PaymentCard />
          </div>
          <MovingDownColumn className="column is-4">
            <PaymentCard />
          </MovingDownColumn>
          <ContentWrapper className="column is-4 has-text-left ">
            <h1 className="title is-6">{`< about_app >`}</h1>
            <h1 className="title is-3 has-text-weight-bold">
              Get Started with Crypto Payments
            </h1>
            <p className="title has-text-weight-normal">
              We have created a few plugins for the most popular shopping carts
              to make integrations fast and easy, even for a non-technical user.
              <strong className="has-text-weight-semibold">
                Get start accepting Crypto Payments today!
              </strong>
            </p>
            <Article className="media">
              <figure className="media-left">
                <h1 className="image is-64x64">
                  <img src="/images/girl.jpg" alt="girl" />
                </h1>
              </figure>
              <div className="media-content">
                <div className="content">
                  <h1 className="is-size-6 has-text-weight-bold">
                    Jina Nilson,<span className="purple">UI Designer</span>
                  </h1>
                </div>
              </div>
            </Article>
          </ContentWrapper>
        </div>
      </div>
    </section>
  );
};
export default Payments;
