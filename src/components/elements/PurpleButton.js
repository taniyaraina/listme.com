import React from 'react';
import styled from 'styled-components';

import { theme } from '../../utils/theme';

const Button = styled.button`
  border-radius: 100px;
  background-color: transparent !important;
  color: ${theme.darkAccent} !important;
  border-color: ${theme.darkAccent} !important;
  box-shadow: none !important ;
  transition: 0.5s;
  :hover {
    background-color: ${theme.darkAccent} !important;
    color: ${theme.backgroundColor} !important;
    box-shadow: 0px 9px 30px 0px rgba(102, 75, 196, 0.4) !important ;
  }
`;
const PurpleButton = ({ title }) => {
  return <Button className="button ">{title}</Button>;
};
export default PurpleButton;
