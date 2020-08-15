import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const InfoWrapper = [
  {
    title: 'Find it',
    subtitle: 'Find where you like to go',
  },
  {
    title: 'Attend it',
    subtitle: 'Go where you found to go.',
  },
  {
    title: 'Pay',
    subtitle: 'Automatically pay to venue',
  },
];

const Container = styled.div`
  .card {
    border-radius: 20px;
    box-shadow: 0px 15px 38px rgba(0, 0, 0, 0.1);
    padding: 2rem 0rem;
    transition: 0.5s;
    :hover {
      margin-top: -1.5rem;
    }
  }
  .check {
    background: radial-gradient(circle farthest-corner at 100% 110%, #68044d 10%, #9d2b7e 50%);
    box-shadow: 0px 9px 30px 0 rgba(157,43,126,0.4)!important;
    color: ${theme.backgroundColor};
    padding: 1.4rem;
    border-radius: 100px;
    box-shadow: 0px 15px 38px rgba(0, 0, 0, 0.1);
  }
  /* .arrow {
    transition: 0.5s;
    :hover {
      color: ${theme.darkAccent};
    }
  } */
  .subtitle {
    margin-top: -15px !important;
  }
`;

const InfoCards = () => {
  return (
    <section className="section">
      <div className=" container">
        <Container className="columns is-centered">
          {InfoWrapper.map(item => (
            <div className="column is-4">
              <div className="columns card is-gapless is-vcentered is-mobile">
                <div className="column is-3 has-text-centered">
                  <span className="icon check">
                    {' '}
                    <i className="fas fa-check" />
                  </span>
                </div>
                <div className="column is-7">
                  {' '}
                  <h1 className="title is-5">{item.title}</h1>
                  <h1 className="subtitle is-6  has-text-weight-normal">
                    {item.subtitle}
                  </h1>
                </div>
                <div className="column is-2">
                  <a href="/">
                    <img src="images/arrow.png" alt="left-arrow" />
                    {/* <span className="icon is-size-4 arrow">
                    <i className="fas fa-arrow-right" />
                  </span> */}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
};
export default InfoCards;
