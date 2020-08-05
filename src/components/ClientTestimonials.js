import React from 'react';
import styled from 'styled-components';
import Heading from './elements/Heading';

const Container = styled.div`
  img {
    border-radius: 40px;
  }
  p {
    line-height: 1.875;
    margin-bottom: 2rem;
    margin-top: 2rem;
    font-size: ${props => props.theme.fontSizeMedium}px !important;
  }
`;

const TheySay = () => {
  return (
    <section className="section">
      <div className="container">
        <Container className="columns is-vcentered">
          <div className="column is-6">
            <img src="/images/personComputer.jpg" alt="personComputer" />
          </div>
          <div className="column is-6">
            <Heading subtitle={`< they_say >`} title="Clients Testimonials" />
            <p>
              “WallApp has consistently impressed us with its service and engi
              neering. We are excited to see where bitcoin is headed, and we are
              confident that we are working with the best company to carry this
              technology forward.”
            </p>
            <div className="content">
              <h1 className="title is-5">Arnold Wilson</h1>
              <h2 className="subtitle is-6 ">React Developer</h2>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
export default TheySay;
