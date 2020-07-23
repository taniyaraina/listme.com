import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { theme } from '../utils/theme';
import Image from '../../static/images/footer_home_1.png';

const Icons = [
  { icon: 'fab fa-twitter-square' },
  { icon: 'fab fa-facebook' },
  { icon: 'fab fa-linkedin' },
  { icon: 'fab fa-instagram' },
  { icon: 'fab fa-pinterest' },
];

const FooterStyled = styled.footer`
  background-image: url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  min-height: 30rem;
  width: 100%;
  padding-top: 10.5rem;
  .is-6 {
    font-size: 0.85rem;
    line-height: 1.5rem;
  }
  .footer-logo {
    height: 2.5rem;
    margin-bottom: 1rem;
  }
  h1 {
    color: ${theme.backgroundColor} !important;
  }
  .grey {
    color: ${theme.lightGrey} !important;
  }
  .bold {
    font-weight: bold;
  }

  input {
    border-radius: 100px;
    background-color: ${theme.darkPurple};
    border-width: 0px;
    color: ${theme.backgroundColor};
    ::placeholder {
      color: ${theme.lightGrey};
    }
    width: 85%;
  }
  button {
    border-radius: 100px;
    padding: 0rem 3rem;
    margin-top: 1rem;
    height: 3rem;
    background-color: ${theme.hoverColor} !important;
    font-weight: 600;
  }
  .is-borderTop {
    border: 0px solid #fff;
    border-top-width: 1px;
    margin-top: 2rem;
  }
  .icon {
    margin-left: -3rem;
  }
  a {
    transition: 0.6s;
    :hover {
      color: ${theme.darkAccent} !important;
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <section className="section">
        <div className="columns is-centered has-text-left">
          <div className="column is-3">
            <Link className="" to="/">
              <img
                src="/images/softlab_footer.png"
                alt="site logo"
                className="footer-logo"
              />
            </Link>
            <h1 className="title is-6 has-text-weight-light grey small">
              We are a software house from USA focused on custom software
              development, e-commerce platforms, ERP className systems
              development.
            </h1>
            <div className="columns">
              <div className="column is-8">
                <div className="columns is-mobile is-gapless">
                  {Icons.map(({ icon }) => (
                    <div className="column is-2">
                      <span className="icon is-size-4">
                        <i className={icon} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
            <h1 className="title is-5  ">
              <span className="bold"> Useful Links</span>
            </h1>
            <h1 className="title is-6  has-text-weight-light ">About Us</h1>
            <h1 className="title is-6  has-text-weight-light ">Help Link</h1>
            <h1 className="title is-6  has-text-weight-light ">
              Terms & Conditions
            </h1>

            <h1 className="title is-6  has-text-weight-light ">
              <Link to="/contact">Contact Us</Link>
            </h1>

            <h1 className="title is-6  has-text-weight-light ">
              Privacy Policy
            </h1>
          </div>
          <div className="column is-3">
            <h1 className="title is-4 has-text-weight-bold "> Newsletter</h1>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  placeholder="Your Email"
                />
                <span className="icon is-small">
                  <i className="fas fa-envelope"></i>
                </span>
              </p>
            </div>
            <button type="button" className="button is-primary is-medium">
              Submit
            </button>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-11">
            <div className="columns is-borderTop">
              <div className="column is-5">
                <h1 className="subtitle is-6 grey">
                  Terms of Use | Privacy Environmental Policy
                </h1>
              </div>
              <div className="column is-2" />
              <div className="column is-6">
                <h1 className="subtitle is-6 grey">
                  Copyright © 2019 Softlab by WebGeniusLab. All Rights Reserved.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FooterStyled>
  );
};
export default Footer;
