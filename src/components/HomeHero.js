import React from 'react';
import styled from 'styled-components';

import SocialIconsHomeHero from './SocialIconsHomeHero';
import PaySpendHomeHero from './PaySpendHomeHero';
import HeroImages from './HeroImages';

const Section = styled.section`
  padding-top: 4rem;
  overflow-x: hidden;
  overflow-y: hidden;
  .is-hidden-mobile {
    transform: translateY(2%);
    @media screen and (max-width: 768px) {
      display: none !important;
    }
  }
  @media screen and (max-width: 768px) {
    padding-top: 1rem;
    padding-left: 1rem;
  }
`;

const SocialIcons = styled.div`
  position: absolute;
  top: 50%;
`;

const HomeHero = () => {
  return (
    <>
      <SocialIcons className="is-hidden-mobile">
        <SocialIconsHomeHero />
      </SocialIcons>
      <Section className="section">
        <div className="container">
          <div className="columns is-vcentered is-mobile">
            <div className="column is-5-desktop is-mobile">
              <PaySpendHomeHero />
            </div>
            <div className="column is-9-desktop is-6-mobile">
              <HeroImages />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
export default HomeHero;
