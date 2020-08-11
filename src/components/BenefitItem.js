import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  .icon {
    color: ${theme.darkAccent};
  }
  img {
    max-height: 1.7rem !important;
  }
  .Inner {
    display: flex;
  }
  .is-2 {
    /* align-self: center; */
  }
  .subtitle {
    line-height: 1.7;
  }
  span {
    height: 3rem;
    width: 3rem;
  }
  padding-top: 1rem;
  h1 {
    color: ${theme.textColorLite} !important;
  }
`;

const BenefitItem = ({ icon, heading }) => {
  return (
    <Container>
      <div className="columns Inner is-mobile">
        <div className="column is-2 ">
          <span className="icon">
            <img src={icon} />
          </span>
        </div>
        <div className="column is-10">
          <h1 className="subtitle is-6 is-size-5-touch">{heading}</h1>
        </div>
      </div>
    </Container>
  );
};
export default BenefitItem;
