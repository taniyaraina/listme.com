import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { theme } from '../utils/theme';
import Image from '../../static/images/Footerbackground.png';

const Icons = [
  { icon: 'fab fa-twitter', onHover: '#1da1f2' },
  { icon: 'fab fa-facebook-f', onHover: '#3b5998' },
  { icon: 'fab fa-linkedin-in', onHover: '#007bb5' },
  { icon: 'fab fa-instagram', onHover: '#c32aa3' },
];

const FooterStyled = styled.footer`
  background-image: url('${Image}');
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
    font-family: ${theme.primaryFontFamily} !important;
  }
  .footer-logo {
    height: 2.5rem;
    margin-bottom: 1rem;
  }
  .wrap {
    margin-top: 8rem;
  }
  h1 {
    color: ${theme.backgroundColor} !important;
    font-family: ${theme.secondaryFontFamily} !important;
  }
  .grey {
    color: ${theme.lightGrey} !important;
    font-family: ${theme.secondaryFontFamily};
    line-height: 1.8;
  }
  .bold {
    font-weight: bold;
    font-family: ${theme.secondaryFontFamily} !important;
    color: ${theme.backgroundColor} !important;
  }
  .is-borderTop {
    border: 0px solid #4f4e4e;
    border-top-width: 1px;
    margin-top: 3rem;
  }
  .foot{
    font-size:14px;
  }
  a {
    transition: 0.6s;
    :hover {
      color: ${theme.darkAccent};
      text-decoration: underline;
    }
  }
`;
const IconsGroup = styled.a`
  margin-right: 10px;
  margin-top: 1rem;
  background: #664bc4;
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
          <div className="columns is-variable is-8 wrap">
            <div className="column is-4">
              <Link className="" to="/">
                <img
                  src="/images/footer-Logo.png"
                  alt="site logo"
                  className="footer-logo"
                />
              </Link>
              <h1 className=" is-size-6 has-text-weight-normal grey small">
                We are a technology-focused company with a focus on digital
                transformation in the night-time industry B2B/B2C experiences.
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
              <h1 className="title is-4 has-text-weight-semibold mt-3">
                Contact Us
              </h1>
              <h1 className="title is-size-6 lineHeight  has-text-weight-normal  grey  ">
                <span className="bold"> Address:</span>
                {` `}
                20-22 Wenlock Road London N1 7GU
              </h1>
              <h1 className="title is-size-6 has-text-weight-normal  grey ">
                <span className="bold"> Website:</span>
                {`  `}
                <a>thelistmeapp.com</a>

              </h1>
              <h1 className="title is-size-6   has-text-weight-normal  grey  ">
                <span className="bold"> Email:</span>
                {`  `}
                <a>hello@listmeapp.co</a>
              </h1>
              <h1 className="title is-size-6   has-text-weight-normal  grey ">
                <span className="bold"> WhatsApp:</span>
                {`  `}
                <a>+442080401901</a>
              </h1>
            </div>
            <div className="column is-4">
              <h1 className="title is-5  ">
                <h1 className=" title is-4 has-text-weight-semibold mt-3">
                  {' '}
                  Useful Links
                </h1>
              </h1>
              <h1 className="title is-size-6  has-text-weight-normal ">
                {' '}
                <Link to="/">Terms & Conditions</Link>
              </h1>
              <h1 className="title is-size-6  has-text-weight-normal ">
                {' '}
                <Link to="/contact">Contact Us</Link>
              </h1>
              <h1 className="title is-size-6  has-text-weight-normal ">
                <Link to="/">Privacy Policy</Link>
              </h1>
            </div>
          </div>
          <div className="is-borderTop">
            <h1 className="subtitle grey has-text-right foot">
              Copyright © 2020 ListMe by ListMe Team All Rights Reserved.
            </h1>
          </div>
        </div>
      </section>
    </FooterStyled>
  );
};
export default Footer;
