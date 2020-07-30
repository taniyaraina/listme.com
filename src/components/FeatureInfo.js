import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  margin-bottom: 3rem !important;
  display: flex;
  .is-3 {
    align-self: center;
  }
  .is-9 {
    text-align: left;
  }
  .is-5 {
    margin-bottom: 2rem;
  }
  .is-6 {
    line-height: 2;
  }
  .icon {
    background-color: aliceblue;
    color: ${theme.darkAccent};
    height: 5rem;
    width: 5rem;
    border-radius: 3rem;
    font-size: 2rem;
  }
`;

const FeatureInfo = ({ icon, title, subtitle }) => {
  return (
    <Container className="columns is-mobile">
      <div className="column is-3 is-mobile has-text-centered">
        <div className="Wrapper">
          <span className="icon ">
            {' '}
            <i className={icon} />
          </span>
        </div>
      </div>
      <div className="column is-9">
        {' '}
        <h1 className="title is-4">{title}</h1>
        <h1 className="subtitle is-6  has-text-weight-normal">{subtitle}</h1>
      </div>
    </Container>
  );
};
export default FeatureInfo;
