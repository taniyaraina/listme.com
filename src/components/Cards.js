import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';

const CardWrapper = styled.div`
  width: 19rem;
  height: 25rem;
  border-radius: 30px;
  box-shadow: 0px 15px 38px rgba(0, 0, 0, 0.1);
  @media only screen and (max-width: 768px) {
    width: auto;
  }
  h2 {
    color: ${theme.darkAccent} !important;
    :hover {
      transition: all 0.3s ease-in-out;
    }
  }
  p {
    line-height: 33.75px;
    font-size: 18px !important;
  }
  .card-content {
    padding: 2.5rem !important;
  }
  @media only screen and (max-width: 768px) {
    .card {
      width: auto !important;
      height: auto !important;
    }
  }

  .icon {
    position: absolute;
    top: 20%;
    right: 42%;
    width: 3rem;
  }
  @-webkit-keyframes services_circle_wrapper {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
  @keyframes services_circle_wrapper {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
  .services_circle_wrapper {
    width: 84%;
    height: 84%;
    left: 8%;
    top: 8%;
    position: absolute;
    z-index: -1;
  }

  .services_circle_wrapper:nth-child(2) {
    transform: rotate(180deg);
    animation: service_hexagon_2 2s infinite linear;
    animation-play-state: paused;
  }
`;

const Wrapper = styled.div`
  color: ${props => (props.color ? '#9d2b7e' : '#54e0c4')};
  border-color: #6a4bc4;
  position: relative;
  z-index: 1;
  width: 110px;
  height: 110px;
  line-height: 110px;
  font-size: 42px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  border: 1px solid CurrentColor;
  box-sizing: content-box;
  border-radius: 50%;
  :hover {
    animation: services_circle_wrapper 2s infinite linear;
  }
  :before {
    content: '';
    z-index: -1;
    left: 0;
    width: 100%;
    position: absolute;
    height: 100%;
    box-shadow: 0px 0px 25px 0px CurrentColor,
      0px 0px 25px 0px CurrentColor inset;
    border-radius: 50%;
    opacity: 0.2;
  }
`;
const ServiceCircle = styled.div`
  background-color: ${props => (props.circleColorOne ? '#ca5cbc' : '#dd9933')};
  width: 14px;
  height: 14px;
  border-radius: 50%;
`;

const ServiceCircleSecond = styled.div`
  background-color: ${props => (props.circleColorTwo ? '#9d2b7e' : '#ddcf63')};
  width: 14px;
  height: 14px;
  border-radius: 50%;
`;

const Cards = ({
  Img,
  title,
  subtitle,
  circleColorOne,
  circleColorTwo,
  color,
}) => {
  return (
    <CardWrapper className="card">
      <div className="card-content">
        <Wrapper className="services_icon_wrapper" color={color}>
          <div className="services_circle_wrapper">
            <ServiceCircle
              className="services_circle"
              circleColorOne={circleColorOne}
            />
          </div>
          <div className="services_circle_wrapper">
            <ServiceCircleSecond
              className="services_circle"
              circleColorTwo={circleColorTwo}
            />
          </div>
        </Wrapper>
        <div className="icon">
          <img src={Img} alt="iconImage" />
        </div>
        <h1 className="title is-5 has-text-black has-text-weight-semibold">
          {title}
        </h1>
        <div className="content">
          <p className="subtitle has-text-weight-normal has-text-grey-lighter">
            {subtitle}
          </p>
        </div>
      </div>
    </CardWrapper>
  );
};
export default Cards;
