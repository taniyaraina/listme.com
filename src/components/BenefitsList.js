import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

import PersonalAppBenefits from './PersonalAppBenefits';
import BusinessAppBenefits from './BusinessAppBenefits';

const Container = styled.div`
  button {
    border-color: transparent;
    box-shadow: none;
    background-color: transparent;
  }
  .personal {
    box-shadow: ${props =>
      props.selected ? '0px 15px 39px rgba(0, 0, 0, 0.2) !important' : 'none'};
    color: ${props =>
      props.selected ? theme.darkAccent : theme.textColorLite};
  }
  .business {
    box-shadow: ${props =>
      props.selected ? '' : '0px 15px 39px rgba(0, 0, 0, 0.2) !important'};
    color: ${props =>
      props.selected ? theme.textColorLite : theme.darkAccent};
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
