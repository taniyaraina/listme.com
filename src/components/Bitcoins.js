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

const Section = styled.div``;

const Bitcoins = () => {
  return (
    <Section className="section">
      <div className="columns is-centered">
        <div className="column is-10">
          <div className="columns is-gapless is-centered has-text-centered">
            {Bitcoin.map(item => (
              <div className="column is-2">
                <img src={`images/${item.image}.png`} alt="bitcoin" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Bitcoins;
