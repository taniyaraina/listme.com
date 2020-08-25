import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';

const Bitcoin = [
  { image: 'Fx-open-Logo' },
  { image: 'Paysend-Logo' },
  { image: 'MetaQuets-Image' },
  { image: 'Bank-Logo' },
  { image: 'Bitcoin-Logo' },
  { image: 'Uber-Logo' },
  { image: 'ESL-Logo' },
  { image: 'Flippa-Logo' },
];

const Section = styled.div`
  .column.is-3 {
    :focus {
      outline: none;
    }
  }
  h1 {
    margin-bottom: 3rem;
    font-size: 36px;
    font-family: ${props => props.theme.primaryFontFamily};
    margin-left: 5rem;
  }
  @media only screen and (max-width: 768px) {
    h1 {
      margin-left: 0;
    }
  }
  margin-top: 5rem;
  margin-bottom: 4rem;
  .zoom {
    transition: all 400ms;
  }

  .zoom:hover {
    transform: scale(1.1);
  }
`;

const OurWorkWith = () => {
  return (
    <Section className="section">
      <div className="container">
        <div className="columns is-centered is-vcentered">
          <div className="column is-12">
            <h1 className="has-text-weight-bold">
              Our ID Provider works with…
            </h1>
            <ImgSlider>
              {Bitcoin.map(item => (
                <div className="column is-3 has-text-centered">
                  <img
                    src={`images/${item.image}.png`}
                    className="zoom"
                    alt="bitcoin"
                  />
                </div>
              ))}
            </ImgSlider>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default OurWorkWith;
