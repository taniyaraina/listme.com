import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Wrapper = styled.div`
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
`;

const MapHero = ({ Title, lightSubtitle, subtitle }) => {
  return (
    <Wrapper className="section hero">
      {' '}
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-2 has-text-weight-bold">{Title}</h1>
          <h1 className="title is-5 has-text-weight-light">
            <span className="grey">{lightSubtitle}</span> {subtitle}
          </h1>
        </div>
      </div>
    </Wrapper>
  );
};
export default MapHero;
