import React from 'react';
import styled from 'styled-components';
import Heading from './elements/Heading';
import { theme } from '../utils/theme';

const BenefitList = [
  {
    img: '/images/contacticon.png',
    title:
      'We help you get customers to go cashless. Less work to be done means better efficiency.',
  },
  {
    img: '/images/safety-Icon.png',
    title:
      'With the G-token, your customers can safely enjoy their night without the need of carrying their paper ID',
  },
  {
    img: '/images/Message-icon.png',
    title:
      'With the E-guest list, your door pickers never have to stare at a long queue of angry customers waiting to get into the venue anymore.',
  },
  {
    img: '/images/garbage-icon.png',
    title:
      'The ListMe is the bridge between you and customers. Create a real trendy event through messaging and photo feeds!',
  },
];

const Container = styled.div`
  align-content: right;
  .lightGreen {
    color: ${theme.hoverColor} !important;
  }
  .section {
    padding-top: 0rem;
  }
  .buttonBorder {
    border: 1px solid ${theme.textColorLite};
    display: inline-block;
    border-radius: 100px;
    padding: 2px 2px;
    button {
      border-radius: 100px;
      width: 10rem;
      border-width: 0px;
    }
  }
`;

const Map = styled.div``;

const Wrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  .img {
    width: 36px;
    height: 36px;
    margin-right: 1.5rem;
    margin-left: 3rem;
  }
  .is-size-6 {
    color: ${props => props.theme.textColorLite} !important;
  }
`;

const GlobeInformation = () => {
  return (
    <Container className="container">
      <div className="columns is-multiline is-gapless">
        <div className="column is-1" />
        <div className="column is-6">
          <section className="section">
            <Heading title="Reap the benefit of digitization" />
            {BenefitList.map(item => (
              <Wrapper>
                <img src={item.img} className="img" alt="icon" />
                <p className="is-size-6">{item.title}</p>
              </Wrapper>
            ))}
          </section>
        </div>
        <div className="column">
          <Map className="">
            <img src="/images/contact/map.png" alt="" />
          </Map>
        </div>
      </div>
    </Container>
  );
};
export default GlobeInformation;