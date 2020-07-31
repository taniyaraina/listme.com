import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { theme } from '../../utils/theme';

const Button = styled.button`
  color: ${props => (props.color ? props.color : props.theme.darkAccent)};
  border-radius: 100px !important;
  background-color: transparent !important;
  border-color: ${theme.darkAccent} !important;
  box-shadow: none !important ;
  transition: 0.5s;
  :hover {
    background-color: ${theme.darkAccent} !important;
    color: ${theme.backgroundColor} !important;
    box-shadow: 0px 9px 30px 0px rgba(102, 75, 196, 0.4) !important ;
  }
`;
const PurpleButton = ({ title, className, link, color }) => {
  return (
    <Link to={link}>
      <Button className={`button ${className}`} color={color}>
        {title}
      </Button>
    </Link>
  );
};
export default PurpleButton;
