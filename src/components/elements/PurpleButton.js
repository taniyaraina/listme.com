import React from 'react';
import styled from 'styled-components';

import { theme } from '../../utils/theme';

const Button = styled.button`
  color: ${props => (props.color ? props.color : props.theme.secondaryBorder)};
  font-size: ${props =>
    props.size ? props.size : props.theme.fontSizeMedium}px !important;
  border-radius: 100px !important;
  background-color: ${props =>
    props.backgroundColor
      ? props.theme.mainBrandColor
      : 'transparent'}!important;
  border-color: ${theme.secondaryBorder} !important;
  box-shadow: ${props =>
    props.Shadow ? props.theme.buttonBoxShadow : 'none'} !important;
  transition: 0.5s;
  :hover {
    background-color: ${props =>
      props.hoverBackgroundColor
        ? props.theme.backgroundColor
        : props.theme.mainBrandColor}!important;
    color: ${props =>
      props.hoverColor
        ? props.theme.textColor
        : props.theme.backgroundColor} !important;
    box-shadow: ${props =>
      props.hoverShadow ? props.theme.buttonBoxShadow : 'none'} !important;
  }
`;
const PurpleButton = ({
  title,
  className,
  href,
  color,
  size,
  hoverShadow,
  Shadow,
  hoverColor,
  backgroundColor,
  hoverBackgroundColor,
}) => {
  return (
    <a href={href}>
      <Button
        className={`button ${className}`}
        color={color}
        size={size}
        hoverShadow={hoverShadow}
        Shadow={Shadow}
        backgroundColor={backgroundColor}
        hoverBackgroundColor={hoverBackgroundColor}
        hoverColor={hoverColor}
      >
        {title}
      </Button>
    </a>
  );
};
export default PurpleButton;
