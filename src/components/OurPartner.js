import React from 'react';
import styled from 'styled-components';
import LogoSlider from './LogoSlider';

const Container = styled.div`
  .column {
    :focus {
      outline: none;
    }
  }
  img {
    margin: auto;
  }
  h1 {
    margin-bottom: 3rem;
    font-size: 36px;
    font-family: ${props => props.theme.primaryFontFamily};
    margin-left: 10rem;
  }
  @media only screen and (max-width: 768px) {
    h1 {
      margin-left: 2rem;
    }
  }
  overflow-x: hidden;
  overflow-y: hidden;
  margin-bottom: 2rem;
`;

const Data = [
  {
    noColor: '/images/stories-NoColor.png',
    Color: '/images/stories-Color.png',
  },
  {
    noColor: '/images/BambuClubLogo-nocolor.png',
    Color: '/images/BambuClubLogo-color.png',
  },
  {
    noColor: '/images/stories-NoColor.png',
    Color: '/images/stories-Color.png',
  },
  {
    noColor: '/images/BambuClubLogo-nocolor.png',
    Color: '/images/BambuClubLogo-color.png',
  },
  {
    noColor: '/images/stories-NoColor.png',
    Color: '/images/stories-Color.png',
  },
  {
    noColor: '/images/BambuClubLogo-nocolor.png',
    Color: '/images/BambuClubLogo-color.png',
  },
  {
    noColor: '/images/stories-NoColor.png',
    Color: '/images/stories-Color.png',
  },
  {
    noColor: '/images/BambuClubLogo-nocolor.png',
    Color: '/images/BambuClubLogo-color.png',
  },
];

const OurPartner = () => {
  return (
    <Container className="container">
      <div className="columns is-gapless is-centered is-vcentered">
        <div className="column is-12">
          <h1 className="has-text-weight-bold">The ListMe family</h1>
          <LogoSlider>
            {Data.map(item => (
              <div className="column is-3">
                <img
                  src={item.noColor}
                  alt="client"
                  onMouseOver={e => {
                    e.currentTarget.src = item.Color;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.src = item.noColor;
                  }}
                />
              </div>
            ))}
          </LogoSlider>
        </div>
      </div>
    </Container>
  );
};
export default OurPartner;
