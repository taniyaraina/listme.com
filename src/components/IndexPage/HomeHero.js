import React from 'react';
import styled from 'styled-components';

import SocialIcons from './SocialIcons';
import PaySpend from './PaySpend';
import ImageCollection from './ImageCollection';

const Section = styled.section`
  .mobile-hidden {
    @media screen and (max-width: 600px) {
      display: none !important;
    }
  }
`;

const HomeHero = () => {
  return (
    <Section className="section">
      <div className="columns is-gapless ">
        <div className="column is-1 mobile-hidden">
          <SocialIcons />
        </div>
        <div className="column is-5">
          <PaySpend />
        </div>
        <div className="column is-6">
          <ImageCollection />
        </div>
      </div>
    </Section>
  );
};
export default HomeHero;
