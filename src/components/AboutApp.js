import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  .green {
    color: ${theme.hoverColor} !important;
  }
  .lineHeight {
    line-height: 1.5rem;
  }
  img {
    height: auto;
    min-width: 40rem;
  }
`;

const AboutApp = () => {
  return (
    <Container className="container">
      <section className="section">
        <div className="columns is-gapless is-vcentered">
          <div className="column is-6">
            <h1 className="title is-5 green">{`<about app>`}</h1>
            <h1 className="title is-2 has-text-weight-bold ">
              Starting with App is Easier Than Anything!
            </h1>
            <h1 className="title is-6 lineHeight has-text-weight-normal">
              We started our app because we wanted to make it easy for
              businesses to accept bitcoin payments. We are currently the
              largest bitcoin payment processor in the world, serving
              industry-leading merchants on six continents. We’ve created a
              seamless, secure bitcoin
            </h1>
          </div>
          <div className="column is-6 has-text-centered">
            <div className="columns is-gapless has-text-centered">
              <div className="column is-6">
                <img src="images/SlidingPhone.png" />
              </div>
              <div className="column is-6">
                <img src="images/SlidingPhone2.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};
export default AboutApp;
