import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PurpleButton from './elements/PurpleButton';

const Section = styled.div`
  .navbar {
    padding: 0rem 1.8rem !important;
    font-family: ${props => props.theme.primaryFontFamily};
    background-color: ${props =>
      props.dark ? '#191A23' : 'transparent'}!important;
      height: ${props => (props.navHeight ? '6rem' : '')}!important;
  }
  .navbar-start {
    flex: 1;
    justify-content: center;
    margin-top: 22px;
  }
  .navbar-item img {
    max-height: 2.125rem;
  }
  .navbar-item {
    a {
      color: ${props => props.theme.textColor} !important;
    }
    line-height: 30px;
    font-weight: 600 !important;
    font-family: ${props => props.theme.fontFamilyThin};
    color: ${props => props.theme.textColor} !important;
  }
  .navbar-burger {
    background-color: transparent;
    color: ${props => props.theme.mainBrandColor} !important;
  }
  .navbar-end {
    align-items: center;
    font-family: ${props => props.theme.fontFamilyThin};
    color: ${props => props.theme.textColor} !important;
    font-weight: 600 !important;
  }
  .btn {
    padding: 20px 25px;
  }

  @media only screen and (max-width: 768px) {
    .nav {
      display: flex;
      flex-direction: column;
      text-align: left !important;
      margin-left: 2rem !important;
    }
    .navbar {
      background-color: #f9f9f9;
      padding: 0 !important;
    }
    .navbar-item img {
      height: 1.5rem;
      margin-left: 20px;
      margin-top: 2px;
    }
    .navbar-menu {
      height: 100vh;
    }
    .navbar-brand {
      align-items: center;
      justify-content: space-between;
    }
    .navbar-end {
      display: none;
    }
  }

  .nav {
    text-align: center;
    overflow: hidden;
    margin: 2em auto;
    width: 520px;
    position: relative;
  }

  .nav a {
    display: block;
    position: relative;
    float: left;
    padding: 1em 0 2em;
    width: 25%;
    text-decoration: none;
    transition: 0.5s;
  }

  .nav a {
    color: ${props =>
      props.dark
        ? props.theme.backgroundColor
        : props.theme.textColor}!important;};

  }

  .effect {
    position: absolute;
    left: -12.5%;
    transition: 0.5s ease-in-out;
  }

  .nav a:nth-child(1):hover ~ .effect {
    left: 12.5%;
  }

  .nav a:nth-child(2):hover ~ .effect {
    left: 37.5%;
  }

  .nav a:nth-child(3):hover ~ .effect {
    left: 62.5%;
  }

  .nav a:nth-child(4):hover ~ .effect {
    left: 87.5%;
  }

  /* ----- dot example -----*/

  .ph-dot-nav:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 40px;
  }

  .ph-dot-nav a:after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    bottom: 38px;
    left: 50%;
    margin-left: -2px;
    border-radius: 100%;
  }

  .ph-dot-nav .effect {
    width: 6px;
    height: 6px;
    bottom: 15px;
    margin-left: -5px;
    background: ${props => props.theme.mainBrandColor};
    border-radius: 100%;
  }

  .ph-dot-nav .test:after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    bottom: 15px;
    left: 50%;
    margin-left: -2px;
    background: ${props => props.theme.mainBrandColor};
    border-radius: 100%;
  }
`;

const Header = ({ dark, navHeight }) => {
  const [menuActive, setMenuActive] = useState(false);

  const [visible, setVisible] = useState(true);

  const handleMobileMenu = () => setMenuActive(!menuActive);

  const BottomItem = ({ link, navTitle, className }) => {
    return (
      <Link
        to={link}
        className={className}
        onMouseOver={() => setVisible(false)}
        onMouseOut={() => setTimeout(() => setVisible(true), 1500)}
      >
        {navTitle}
      </Link>
    );
  };

  return (
    <Section dark={dark} navHeight={navHeight}>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item image-to-hide" to="/">
            <img src="/images/ListMe-newLogo.png" alt="site logo" />
          </Link>
          <>
            <a
              href="#"
              role="button"
              className={
                menuActive
                  ? 'navbar-burger burger mobile is-active'
                  : 'navbar-burger burger mobile'
              }
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={handleMobileMenu}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </>
        </div>
        <div className={menuActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="ph-dot-nav nav has-text-weight-semibold">
            <BottomItem
              className={visible ? 'test' : ''}
              navTitle="Home"
              link="/"
            />
            <BottomItem navTitle=" Business Users" link="/business" />
            <BottomItem navTitle="FAQs" link="/faq" />
            <BottomItem navTitle="Contact Us" link="contact" />
            <div className="effect" />
          </div>
        </div>
        <div className="navbar-end">
          <PurpleButton
            size
            title="ListMe Now"
            className="btn"
            href="https://apps.apple.com/in/app/listme-app/id1462565783"
            size="14"
            hoverShadow
          />
        </div>
      </nav>
    </Section>
  );
};
export default Header;
