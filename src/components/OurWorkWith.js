import React from 'react';
import styled from 'styled-components';

const Bitcoin = [
  { image: 'Fx-open-Logo' },
  { image: 'Uber-Logo' },
  { image: 'Bitcoin-Logo' },
  { image: 'MetaQuets-Image' },
];

const Section = styled.div`
  h1 {
    margin-bottom: 3rem;
    font-size: 36px;
    font-family: ${props => props.theme.primaryFontFamily};
    margin-left: 5rem;
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
            <div className="columns">
              {Bitcoin.map(item => (
                <div className="column is-3 has-text-centered">
                  <img
                    src={`images/${item.image}.png`}
                    className="zoom"
                    alt="bitcoin"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default OurWorkWith;
