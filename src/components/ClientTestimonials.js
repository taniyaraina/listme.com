import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  img {
    border-radius: 50px;
  }
  .greenColor {
    color: ${theme.hoverColor} !important;
  }
  .imageColumn {
    margin-right: -25rem;
    transform: translate(-20%, -20%);
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const TheySay = () => {
  return (
    <section className="section">
      <Container className="columns is-centered is-vcentered">
        <div className="column is-4">
          <img src="images/personComputer.jpg" alt="personComputer" />
        </div>
        <div className="column is-6">
          <h1 className="subtitle is-5 greenColor">{`< they_say >`}</h1>{' '}
          <h1 className="title is-1 has-text-weight-bold">
            Clients Testimonials
          </h1>
        </div>
        <div className="column is-5 imageColumn">
          <img src="images/letter-q2.png" alt="letterQ" />
        </div>
      </Container>
    </section>
  );
};
export default TheySay;
