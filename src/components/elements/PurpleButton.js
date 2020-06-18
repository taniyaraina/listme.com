import React from 'react';
import styled from 'styled-components';

import { theme } from '../../utils/theme';

const Button = styled.button`
  border-radius: 100px;
  background-color: transparent !important;
  color: ${theme.darkAccent} !important;
  border-color: ${theme.darkAccent} !important;
  box-shadow: none !important ;
  transition: 1s;
  :hover {
    background-color: ${theme.darkAccent} !important;
    color: ${theme.backgroundColor} !important;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 7px 18px !important ;
  }
`;
const PurpleButton = ({ title }) => {
  return <Button className="button ">{title}</Button>;
};
export default PurpleButton;
