import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import PurpleButton from '../elements/PurpleButton';
import { theme } from '../../utils/theme';

const Container = styled.div`
  .purple {
    max-width: 10rem;
    background-color: ${theme.mainBrandColor};
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 7px 18px !important ;
  }
  button {
    height: 3rem;
    width: 10rem;
  }
  padding-top: 2rem;
`;

const PaySpend = () => {
  const props = {
    to: async next => {
      await next({ width: '100%' });
      await next({ width: '80%' });
    },
    from: { width: '100%' },
  };

  return (
    <Container className="columns is-multiline ">
      <div className="column is-2 has-text-centered">
        <div className="purple">
          <animated.img props={props} src="images/wallet.png" />
        </div>
      </div>
      <div className="column is-12">
        <h1 className="title is-1 has-text-weight-bold">
          Pay, Spend & Store Bitcoins on <br />
          Your Terms
        </h1>
      </div>
      <div className="column is-4">
        <PurpleButton title="How it Works" />
      </div>
    </Container>
  );
};
export default PaySpend;
