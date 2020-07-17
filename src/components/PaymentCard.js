import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { theme } from '../utils/theme';

const CardWrapper = styled.div`
  border-radius: 30px;
  box-shadow: 0px 15px 38px rgba(0, 0, 0, 0.1);
  h2 {
    color: ${theme.darkAccent} !important;
    :hover {
      color: ${theme.hoverColor} !important;
      transition: all 0.3s ease-in-out;
    }
  }

  .icon {
    padding-top: 1rem;
    padding-bottom: 2rem;
    color: ${theme.hoverColor} !important;
  }
  .services_icon_wrapper :hover {
    animation: services_circle_wrapper 2s infinite linear;
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

  .services_icon_wrapper {
    color: #6a4bc4;
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
  }

  .services_circle_wrapper {
    width: 84%;
    height: 84%;
    left: 8%;
    top: 8%;
    position: absolute;
    z-index: -1;
  }
  .services_circle {
    background-color: #ca5cbc;
    width: 14px;
    height: 14px;
    border-radius: 50%;
  }

  .services_circle_wrapper:nth-child(2) {
    transform: rotate(180deg);
    animation: service_hexagon_2 2s infinite linear;
    animation-play-state: paused;
  }
`;

const PaymentCard = () => {
  return (
    <CardWrapper className="card">
      <div className="card-content">
        <div className="services_icon_wrapper">
          <div className="services_circle_wrapper">
            <div className="services_circle" />
          </div>
          <div className="services_circle_wrapper">
            <div className="services_circle" />
          </div>
          <i className="fas fa-home" />
        </div>
        <h1 className="title is-5 has-text-weight-semibold">Any Payments</h1>
        <div className="content">
          <h1 className="subtitle is-6 has-text-grey-lighter">
            Accept Crypto payments from your online customers on your
            smartphone.
          </h1>
        </div>
        <Link to="/">
          <h2 className="subtitle is-6 has-text-weight-bold">{`< Read More >`}</h2>
        </Link>
      </div>
    </CardWrapper>
  );
};
export default PaymentCard;
