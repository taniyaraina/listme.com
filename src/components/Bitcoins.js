import React from 'react';
import styled from 'styled-components';

const Bitcoin = [
  { image: 'client-crypto-1' },
  { image: 'client-crypto-2' },
  { image: 'client-crypto-3' },
  { image: 'client-crypto-4' },
  { image: 'client-crypto-5' },
  { image: 'client-crypto-6' },
];

const Section = styled.div`
  .zoom {
    transition: all 400ms;
  }

  .zoom:hover {
    transform: scale(1.1);
  }
`;

const Bitcoins = () => {
  return (
    <Section className="section">
      <div className="columns is-centered is-vcentered">
        <div className="column is-10">
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
    </Section>
  );
};
export default Bitcoins;
