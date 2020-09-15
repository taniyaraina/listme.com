import React from 'react';
import styled from 'styled-components';
import Cards from './Cards';
import Heading from './elements/Heading';
import { theme } from '../utils/theme';

const MovingDownColumn = styled.div`
  margin-top: 70px;
`;
const ContentWrapper = styled.div`
  margin-top: 6rem;
  .title.is-6 {
    color: ${theme.hoverColor} !important;
    margin-bottom: 1rem !important;
  }
  .title.is-3 {
    line-height: 1.3 !important;
  }
  .has-text-weight-normal {
    font-size: 0.9rem;
    line-height: 1.2rem;
  }
  img {
    border-radius: 100px;
  }
  p {
    line-height: 2 !important;
    font-family: ${props => props.theme.secondaryFontFamily};
    color: ${props => props.theme.textColorLite} !important;
  }
`;

const SvgContainer = styled.div`
  margin-top: -13rem;
`;

const Event = () => {
  return (
    <>
      <SvgContainer>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 307.7">
          <path
            fill="rgb(255, 255, 255)"
            fillOpacity="1"
            d="M1380.1,44.8c-253.6,107.2-265.5,201.5-528.2,237C661,307.5,274,233.4,0.2,57.1v454.6h1920V15.8
 C1728.6,3.7,1533.2-20,1380.1,44.8z"
          />
        </svg>
      </SvgContainer>
      <section className="section">
        <div className="container">
          <div className="columns has-text-centered">
            <div className="column is-4">
              <Cards
                circleColorOne
                circleColorTwo
                color
                Img="images/phoneicon.png"
                title="Paperless"
                subtitle="We are more than a paperless solution. We help you become paperless"
              />
            </div>
            <MovingDownColumn className="column is-4">
              <Cards
                Img="images/user-icon.png"
                title="Cashless"
                subtitle="Frictionless “Uber” like social payment method"
              />
            </MovingDownColumn>
            <ContentWrapper className="column is-4 has-text-left">
              <Heading
                subtitle="Let the fun begin"
                title="All you need for venue management"
              />
              <p className="is-size-6 has-text-weight-normal mt-4">
                ListMe app is the one-stop service for managing venues. From
                branding, management to engaging customers. We are the Uber of
                nightlife.
              </p>
            </ContentWrapper>
          </div>
        </div>
      </section>
    </>
  );
};
export default Event;
