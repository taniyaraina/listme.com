import React from 'react';
import styled from 'styled-components';

const Bitcoin = [
  { image: 'Fx-open-Logo' },
  { image: 'Uber-Logo' },
  { image: 'Bitcoin-Logo' },
  { image: 'Paysend-Logo' },
  { image: 'MetaQuets-Image' },
  { image: 'Fx-open-Logo' },
];

const Section = styled.div`
  margin-top: 5rem;
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
          <div className="column is-11">
            <h1>Our ID Provider works with…</h1>
            <div className="columns">
              {Bitcoin.map(item => (
                <div className="column is-2 has-text-centered">
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
