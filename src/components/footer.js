import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';
import Image from '../../static/images/footer_home_1.png';

const FooterStyled = styled.footer`
  background-image: url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  min-height: 30rem;
  width: 100%;
  padding-top: 8rem;
  h1 {
    color: ${theme.backgroundColor} !important;
  }
  .greenColor {
    color: ${theme.hoverColor} !important;
  }
  .grey {
    color: ${theme.textColorLite} !important;
  }
  .bold {
    font-weight: bold;
  }
  .lineHeight {
    line-height: 1.4rem;
  }
  .small {
    line-height: 1.4rem;
  }
  input {
    border-radius: 100px;
    background-color: ${theme.darkPurple};
    border-width: 0px;
    ::placeholder {
      color: ${theme.borderColor};
    }
    width: 100%;
  }
  button {
    border-radius: 100px;
    padding: 0rem 2rem;
    margin-top: 1rem;
    height: 2.5rem;
    background-color: ${theme.hoverColor} !important;
    font-weight: bold;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <section className="section">
        <div className="columns is-centered has-text-left">
          <div className="column is-3">
            <h1 className="title is-2 has-text-weight-bold">
              Softlab <span className="greenColor">{`</>`}</span>
            </h1>
            <h1 className="title is-6 has-text-weight-light grey small">
              We are a software house from USA focused on custom software
              development, e-commerce platforms, ERP class systems development.
            </h1>
          </div>
          <div className="column is-3">
            <h1 className="title is-4 has-text-weight-bold">Contact Us</h1>
            <h1 className="title is-6 lineHeight  has-text-weight-light ">
              <span className="bold"> Adress:</span>
              {` `}
              27 Division St, New York, NY 10002, United States of America
            </h1>
            <h1 className="title is-6   has-text-weight-light ">
              <span className="bold"> Website:</span>
              {`  `}
              <a>Softlab.wdl.net</a>
            </h1>
            <h1 className="title is-6   has-text-weight-light ">
              <span className="bold"> Email:</span>
              {`  `}
              <a>Softlab@gmail.com</a>
            </h1>
            <h1 className="title is-6   has-text-weight-light ">
              <span className="bold"> Phone:</span>
              {`  `}
              <a>+91 8146851290</a>
            </h1>
          </div>
          <div className="column is-2">
            <h1 className="title is-4  ">
              <span className="bold"> Useful Links</span>
            </h1>
            <h1 className="title is-6  has-text-weight-light ">About Us</h1>
            <h1 className="title is-6  has-text-weight-light ">Help Link</h1>
            <h1 className="title is-6  has-text-weight-light ">
              Terms & Conditions
            </h1>
            <h1 className="title is-6  has-text-weight-light ">Contact Us</h1>
            <h1 className="title is-6  has-text-weight-light ">
              Privacy Policy
            </h1>
          </div>
          <div className="column is-2">
            <h1 className="title is-4 has-text-weight-bold "> Newsletter</h1>
            <input className="input is-medium" placeholder="Your Email" />
            <button type="button" className="button is-primary is-medium">
              Submit
            </button>
          </div>
        </div>
      </section>
    </FooterStyled>
  );
};
export default Footer;
