import React from 'react';
import styled from 'styled-components';

import { theme } from '../../utils/theme';

const Button = styled.button`
  color: ${props => (props.color ? props.color : props.theme.secondaryBorder)};
  font-size: ${props =>
    props.size ? props.size : props.theme.fontSizeMedium}px;
  border-radius: 100px !important;
  background-color: transparent !important;
  border-color: ${theme.secondaryBorder} !important;
  box-shadow:${props => (props.Shadow ? props.theme.buttonBoxShadow:'none')} !important;
  transition: 0.5s;
  :hover {
    background-color: ${theme.mainBrandColor} !important;
    color: ${theme.backgroundColor} !important;
    box-shadow:${props => (props.hoverShadow ? props.theme.buttonBoxShadow:'none')} !important;
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
  hoverShadow,
  Shadow,
}) => {
  return (
    <a href={href}>
      <Button
        className={`button ${className}`}
        color={color}
        size={size}
        height={height}
        width={width}
        hoverShadow={hoverShadow}
        Shadow={Shadow}
      >
        {title}
      </Button>
    </a>
  );
};
export default PurpleButton;
