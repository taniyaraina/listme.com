import React from 'react';
import styled from 'styled-components';

import SocialIcons from './SocialIcons';
import PaySpend from './PaySpend';
import ImageCollection from './ImageCollection';

const Section = styled.section`
  overflow-x: hidden;
  overflow-y: hidden;
  padding-top: 4rem;

  .mobile-hidden {
    transform: translateY(2%);
    @media screen and (max-width: 768px) {
      display: none !important;
    }
  }
  @media screen and (max-width: 600px) {
    padding-top: 1rem;
    padding-left: 1rem;
  }
`;

const HomeHero = () => {
  return (
    <Section className="section">
      <div className="columns is-gapless is-mobile">
        <div className="column is-1 mobile-hidden">
          <SocialIcons />
        </div>
        <div className="column is-5">
          <PaySpend />
        </div>
        <div className="column is-7">
          <ImageCollection />
        </div>
      </div>
    </Section>
  );
};
export default HomeHero;
