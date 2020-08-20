import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { theme } from '../../utils/theme';

const Button = styled.button`
  color: ${props => (props.color ? props.color : props.theme.secondaryBorder)};
  font-size: ${props =>
    props.size ? props.fontSizeExtraSmall : props.theme.fontSizeMedium}px;
  border-radius: 100px !important;
  background-color: transparent !important;
  border-color: ${theme.secondaryBorder} !important;
  box-shadow: none !important ;
  transition: 0.5s;
  :hover {
    background-color: ${theme.mainBrandColor} !important;
    color: ${theme.backgroundColor} !important;
  }
`;
const PurpleButton = ({ title, className, href, color, size }) => {
  return (
    <a href={href}>
      <Button className={`button ${className}`} color={color} size={size}>
        {title}
      </Button>
    </a>
  );
};
export default PurpleButton;
