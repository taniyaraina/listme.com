import React from 'react';
import styled from 'styled-components';

import { theme } from '../../utils/theme';

const Button = styled.button`
  color: ${props => (props.color ? props.color : props.theme.darkAccent)};
  font-size: ${props =>
    props.size ? props.size : props.theme.fontSizeMedium}px;
  border-radius: 100px !important;
  background-color: transparent !important;
  border-color: ${theme.darkAccent} !important;
  box-shadow: none !important ;
  transition: 0.5s;
  :hover {
    background-color: ${theme.mainBrandColor} !important;
    color: ${theme.backgroundColor} !important;
  }
`;
const PurpleButton = ({
  title,
  className,
  href,
  color,
  size,
  height,
  width,
}) => {
  return (
    <a href={href}>
      <Button
        className={`button ${className}`}
        color={color}
        size={size}
        height={height}
        width={width}
      >
        {title}
      </Button>
    </a>
  );
};
export default PurpleButton;
