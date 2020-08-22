import React, { useState } from 'react';
import styled from 'styled-components';
import Heading from './elements/Heading';
import { theme } from '../utils/theme';

const FeatureItem = [
  {
    img: '/images/contacticon.png',
    title:
      'Entry without the need of a wallet. ListMe APP is your ID and G-token',
  },
  {
    img: '/images/contacticon2.png',
    title: 'Get guest-listed multiple times while only paying for entry.',
  },
  {
    img: '/images/contacticon3.png',
    title:
      'Explore the event that suits your taste. Check up ListMe for the events you might just like',
  },
  {
    img: '/images/contacticon4.png',
    title:
      'Meet new people, find new friends and get immersed in the night time experience.',
  },
];

const Container = styled.div`
  align-content: right;
  margin-top: 6rem !important;
  .section {
    padding-top: 0rem;
    margin-left: 4rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  .img {
    width: 36px;
    height: 36px;
    margin-right: 1.5rem;
    margin-left: 3rem;
  }
  .is-size-6 {
    color: ${props => props.theme.textColorLite} !important;
  }
`;

const Features = () => {
  return (
    <Container className="columns is-multiline is-gapless">
      <div className="column is-1" />
      <div className="column is-6">
        <section className="section">
          <Heading
            subtitle="App Solution"
            title="Socialise with ListME Across the Globe"
          />
          {FeatureItem.map(item => (
            <Wrapper>
              <img src={item.img} className="img" alt="icon" />
              <p className="is-size-6">{item.title}</p>
            </Wrapper>
          ))}
        </section>
      </div>
      <div className="column">
        <img src="/images/contact/map.png" alt="map-world" />
      </div>
    </Container>
  );
};
export default Features;
