import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';

const Container = styled.div`
  img {
    border-radius: 40px;
  }
  .greenColor {
    color: ${theme.hoverColor} !important;
  }
  p {
    line-height: 1.875;
    margin-bottom: 2rem;
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
            <h1 className="title is-5 greenColor">{`< they_say >`}</h1>{' '}
            <h1 className="title is-3 has-text-weight-bold">
              Clients Testimonials
            </h1>
            <p>
              “WallApp has consistently impressed us with its service and engi
              neering. We are excited to see where bitcoin is headed, and we are
              confident that we are working with the best company to carry this
              technology forward.”
            </p>
            <div className="content">
              <h1 className="title is-6">Arnold Wilson</h1>
              <h2 className="subtitle is-6 ">React Developer</h2>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
export default TheySay;
