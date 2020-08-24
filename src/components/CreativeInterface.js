import React from 'react';
import styled from 'styled-components';
import Heading from './elements/Heading';

import { theme } from '../utils/theme';
import ImageCollection2 from './ImageCollection2';
import PurpleButton from './elements/PurpleButton';

const Container = styled.div`
  .is-6 {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  .wrapper {
    margin-top: 5rem;
  }
  button {
    height: 3.7rem;
    width: 12rem;
  }
`;

const CreativeInterface = () => {
  return (
    <section className="section">
      <Container className="columns is-centered ">
        <div className="column is-5 wrapper">
          <div className="columns">
            <div className="column is-10">
              <Heading
                title="Scale Your Business With Us"
                subtitle="We can help your business."
              />
            </div>
          </div>
          <h1 className="subtitle is-6">
            ListMe is an event social networking service for brands to build &
            engage with their followers, a seamless virtual door with a cashless
            feature to accommodate the change in user behaviour. Join the
            digital ecosystem and create guess success.
          </h1>
          <PurpleButton
            title="Book A Meeting"
            color={theme.textColor}
            className="is-medium has-text-weight-semibold"
            size="18"
          />
        </div>
        <div className="column is-5">
          <ImageCollection2 />
        </div>
      </Container>
    </section>
  );
};
export default CreativeInterface;
