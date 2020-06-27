/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Data = [
  {
    noColor: 'images/Client_1_noColor.png',
    Color: 'images/Client_1_Color.png',
  },
  {
    noColor: 'images/Client_2_noColor.png',
    Color: 'images/Client_2_Color.png',
  },
  {
    noColor: 'images/Client_3_noColor.png',
    Color: 'images/Client_3_Color.png',
  },
  {
    noColor: 'images/Client_4_noColor.png',
    Color: 'images/Client_4_Color.png',
  },
  {
    noColor: 'images/Client_5_noColor.png',
    Color: 'images/Client_5_Color.png',
  },
];

const OurPartner = () => {
  return (
    <Container>
      <div className="columns is-gapless is-centered">
        <div className="column is-12 has-text-centered">
          <h1 className="subtitle is-5 has-text-weight-bold">OUR PARTNERS</h1>
          <div className="columns has-text-centered is-centered">
            {Data.map(item => (
              <div className="column is-2">
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
          </div>
        </div>
      </div>
    </Container>
  );
};
export default OurPartner;
