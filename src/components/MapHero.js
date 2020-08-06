import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Section = styled.div`
  background-image: url(/images/contact/l.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center bottom;
  height: 378px;
  margin-bottom: 40px;
  padding-top: 60px;
  padding-bottom: 145px;
  .grey {
    color: ${theme.textColorLite} !important;
  }
  .is-size-6 {
    margin-left: 12px;
    margin-top: 3px;
  }
`;
const Wrapper = styled.div`
  display: inline-flex;
`;

const MapHero = ({ Title, lightSubtitle, subtitle }) => {
  return (
    <Section className="section hero">
      {' '}
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-2 has-text-weight-bold">{Title}</h1>
          <Wrapper>
            <span className="icon">
              <i className="fas fa-home" />
            </span>
            <h1 className="title is-size-6  has-text-weight-light">
              <span className="grey">{lightSubtitle}</span> {subtitle}
            </h1>
          </Wrapper>
        </div>
      </div>
    </Section>
  );
};
export default MapHero;
