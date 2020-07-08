import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

import PersonalAppBenefits from './PersonalAppBenefits';
import BusinessAppBenefits from './BusinessAppBenefits';

const Container = styled.div`
button{
    border-color:transparent !important;

:focus{
    border-color:transparent !important;
}}
  .personal {
    box-shadow: ${props =>
      props.selected ? '0 0.5em 1em -0.125em rgba(10,10,10,.1)' : 'none'};
      color: ${props =>
        props.selected ? theme.darkAccent : theme.textColorLite};
  }
  .business {
    box-shadow: ${props =>
      props.selected
        ? 'none'
        : '0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02)'};
    color: ${props =>
      props.selected ? theme.textColorLite : theme.darkAccent};
  }

  }
`;

const BenefitsList = ({ selected, onTrue, onFalse }) => {
  return (
    <Container selected={selected}>
      <div className="buttonBorder">
        <button
          onClick={onTrue}
          type="button"
          className="button is-medium personal"
        >
          Personal
        </button>
        <button
          onClick={onFalse}
          type="button"
          className="button is-medium business"
        >
          Business
        </button>{' '}
      </div>
      {selected ? <PersonalAppBenefits /> : <BusinessAppBenefits />}
    </Container>
  );
};
export default BenefitsList;
