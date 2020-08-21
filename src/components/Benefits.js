import React, { useState } from 'react';
import styled from 'styled-components';
import Heading from './elements/Heading';
import { theme } from '../utils/theme';
// import BenefitsList from './BenefitsList';

const BenefitList = [
  {
    img: '/images/contacticon.png',
    title:
      'Entry without the need of a wallet. ListMe APP is your ID and G-token',
  },
  {
    img: '/images/contacticon2.png',
    title: 'Get guest-listed multiple times while only paying for entry.',
  },
  {
    img: '/images/contacticon3.png',
    title:
      'Explore the event that suits your taste. Check up ListMe for the events you might just like',
  },
  {
    img: '/images/contacticon4.png',
    title:
      'Meet new people, find new friends and get immersed in the night time experience.',
  },
];

const Container = styled.div`
  align-content: right;
  .lightGreen {
    color: ${theme.hoverColor} !important;
  }
  .section {
    padding-top: 0rem;
    margin-left: 4rem;
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

const Benefits = () => {
  // const [selected, setSelected] = useState(true);
  return (
    <Container className="columns is-multiline is-gapless">
      <div className="column is-1" />
      <div className="column is-6">
        <section className="section">
          <Heading
            subtitle="App Solution"
            title="Socialise with ListME Across the Globe"
          />
          {BenefitList.map(item => (
            <Wrapper>
              <img src={item.img} className="img" alt="icon" />
              <p className="is-size-6">{item.title}</p>
            </Wrapper>
          ))}
          {/* <BenefitsList
            selected={selected}
            onTrue={() => setSelected(true)}
            onFalse={() => setSelected(false)}
          /> */}
        </section>
      </div>
      <div className="column">
        <Map className="">
          <img src="/images/contact/map.png" alt="" />
        </Map>
      </div>
    </Container>
  );
};
export default Benefits;
