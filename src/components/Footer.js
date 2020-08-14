import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { theme } from '../utils/theme';
import Image from '../../static/images/Footerbackground.png';

const Icons = [
  { icon: 'fab fa-twitter', onHover: `${theme.twitterIconColor}` },
  { icon: 'fab fa-facebook-f', onHover: `${theme.facebookIconColor}` },
  { icon: 'fab fa-linkedin-in', onHover: `${theme.linkedinIconColor}` },
  { icon: 'fab fa-instagram', onHover: `${theme.instagramIconColor}` },
  { icon: 'fab fa-pinterest-p', onHover: `${theme.pinterestIconColor}` },
];

const FooterStyled = styled.footer`
  background-image: url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  .is-size-6 {
    font-size: 0.85rem;
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }
  .is-4 {
    font-size: ${props => props.theme.fontSizeMedium}px !important;
  }
  .footer-logo {
    height: 2.5rem;
    margin-bottom: 1rem;
  }
  .wrap {
    margin-top: 4rem;
  }
  h1 {
    color: ${theme.backgroundColor} !important;
  }
  .grey {
    color: ${theme.lightGrey} !important;
    font-family: ${theme.secondaryFontFamily};
    line-height: 1.5;
    font-size: 14px !important;
  }
  .bold {
    font-weight: bold;
  }
  .is-borderTop {
    border: 0px solid #4f4e4e;
    border-top-width: 1px;
    margin-top: 3rem;
  }
  a {
    transition: 0.6s;
    :hover {
      color: ${theme.darkAccent};
      text-decoration: underline;
    }
  }
  .underline {
    text-decoration: underline;
  }
`;
const IconsGroup = styled.a`
  margin-right: 10px;
  background: ${theme.darkAccent};
  border-radius: 15px;
  :hover {
    background-color: ${props => props.hoverColor} !important;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <section className="section">
        <div className="container">
          <div className="columns wrap">
            <div className="column is-4">
              <Link className="" to="/">
                <img
                  src="/images/footer-Logo.png"
                  alt="site logo"
                  className="footer-logo"
                />
              </Link>
              <h1 className="title is-size-6 has-text-weight-medium grey small">
                We are a software house from USA focused on custom software
                development, e-commerce platforms, ERP className systems
                development.
              </h1>
              {Icons.map(item => (
                <IconsGroup
                  hoverColor={item.onHover}
                  className="icon is-size-7 has-text-white"
                >
                  <i className={item.icon} />
                </IconsGroup>
              ))}
            </div>
            <div className="column is-4">
              <h1 className="title is-4 has-text-weight-bold">Contact Us</h1>
              <h1 className="title is-size-6 lineHeight  has-text-weight-light ">
                <span className="bold"> Adress:</span>
                {` `}
                27 Division St, New York, NY 10002, United States of America
              </h1>
              <h1 className="title is-size-6   has-text-weight-light ">
                <span className="bold"> Website:</span>
                {`  `}
                <a>Softlab.wdl.net</a>
              </h1>
              <h1 className="title is-size-6   has-text-weight-light ">
                <span className="bold"> Email:</span>
                {`  `}
                <a>Softlab@gmail.com</a>
              </h1>
              <h1 className="title is-size-6   has-text-weight-light ">
                <span className="bold"> Phone:</span>
                {`  `}
                <a>+91 8146851290</a>
              </h1>
            </div>
            <div className="column is-4">
              <h1 className="title is-5  ">
                <h1 className=" title is-4 has-text-weight-bold">
                  {' '}
                  Useful Links
                </h1>
              </h1>
              <h1 className="title is-size-6  has-text-weight-light ">
                {' '}
                <Link to="/">About Us</Link>
              </h1>
              <h1 className="title is-size-6  has-text-weight-light ">
                {' '}
                <Link to="/">Help Link</Link>
              </h1>
              <h1 className="title is-size-6  has-text-weight-light ">
                <Link to="/">Terms & Conditions</Link>
              </h1>
              <h1 className="title is-size-6  has-text-weight-light ">
                <Link to="/contact">Contact Us</Link>
              </h1>
              <h1 className="title is-size-6  has-text-weight-light ">
                <Link to="/">Privacy Policy</Link>
              </h1>
            </div>
          </div>
          <div className="is-borderTop">
            <h1 className="subtitle is-size-6 grey has-text-right">
              Copyright © 2020 ListMe by{' '}
              <a className="has-text-white underline">Zeiq.</a> All Rights
              Reserved.
            </h1>
          </div>
        </div>
      </section>
    </FooterStyled>
  );
};
export default Footer;
