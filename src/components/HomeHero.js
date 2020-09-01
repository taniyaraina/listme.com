import React from 'react';
import styled from 'styled-components';

import SocialIconsHomeHero from './SocialIconsHomeHero';
import HomeHeroHeading from './HomeHeroHeading';
import HeroImages from './HeroImages';

const Section = styled.section`
  padding-top: 4rem;
  overflow-x: hidden;
  overflow-y: hidden;
  .head {
    margin-top: 5.5rem;
  }
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
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    .is-6-mobile {
      width: auto !important;
    }
  }
`;

const SocialIcons = styled.div`
  position:"absolute";
  bottom:50%
`;

const HomeHero = () => {
  return (
    <>
      <SocialIcons className="is-hidden-mobile">
        <SocialIconsHomeHero />
      </SocialIcons>
      <Section className="section">
        <div className="container">
          <div className="columns is-mobile">
            <div className="column is-5-desktop is-mobile head">
              <HomeHeroHeading />
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
