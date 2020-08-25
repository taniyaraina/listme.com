import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';

const CardWrapper = styled.div`
  width: 19rem;
  height: 25rem;
  border-radius: 30px;
  box-shadow: 0px 15px 38px rgba(0, 0, 0, 0.1);
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
  .icon {
    position: absolute;
    top: 21%;
    right: 46%;
    font-size: 2.7rem;
    color: #6a4bc4;
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

const PaymentCard = ({ icon, title, subtitle }) => {
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
        </div>
        <div className="icon">
          <i className={icon} />
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
export default PaymentCard;
