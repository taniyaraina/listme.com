import React from 'react';
import styled from 'styled-components';

import SocialIconsHomeHero from './SocialIconsHomeHero';
import PaySpendHomeHero from './PaySpendHomeHero';
import ImageCollectionHomeHero from './ImageCollectionHomeHero';

const Section = styled.section`
  padding-top: 4rem;
  overflow-x: hidden;
  overflow-y: hidden;
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
          <SocialIconsHomeHero />
        </div>
        <div className="column is-5">
          <PaySpendHomeHero />
        </div>
        <div className="column is-8">
          <ImageCollectionHomeHero />
        </div>
      </div>
    </Section>
  );
};
export default HomeHero;
