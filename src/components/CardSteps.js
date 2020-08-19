import React from 'react';
import styled from 'styled-components';
import PaymentCard from './PaymentCard';

const MovingDownColumn = styled.div`
  margin-top: 70px;
`;

const CardSteps = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline has-text-centered is-variable is-8">
          <div className="column ">
            <PaymentCard
              icon="fab fa-bitcoin"
              title="Wallet Free"
              subtitle="With ListMe, your phone is the only thing you need to enjoy a night."
            />
          </div>
          <MovingDownColumn className="column ">
            <PaymentCard
              icon="fab fa-bitcoin"
              title="Discover"
              subtitle="Discover somewhere new and meet a new dance partner."
            />
          </MovingDownColumn>
          <div className="column ">
            <PaymentCard
              icon="fab fa-bitcoin"
              title="Wallet Free"
              subtitle="With ListMe, your phone is the only thing you need to enjoy a night."
            />
          </div>
          <MovingDownColumn className="column ">
            <PaymentCard
              icon="fab fa-bitcoin"
              title="Discover"
              subtitle="Discover somewhere new and meet a new dance partner."
            />
          </MovingDownColumn>
          <div className="column ">
            <PaymentCard
              icon="fab fa-bitcoin"
              title="Wallet Free"
              subtitle="With ListMe, your phone is the only thing you need to enjoy a night."
            />
          </div>
          <MovingDownColumn className="column ">
            <PaymentCard
              icon="fab fa-bitcoin"
              title="Discover"
              subtitle="Discover somewhere new and meet a new dance partner."
            />
          </MovingDownColumn>
        </div>
      </div>
    </section>
  );
};
export default CardSteps;
