import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PurpleButton from './elements/PurpleButton';
import { theme } from '../utils/theme';

const Section = styled.div`
  .navbar {
    padding: 1.3rem 1.8rem !important;
    font-family: ${props => props.theme.primaryFontFamily};
  }
  .navbar-start {
    flex: 1;
    justify-content: center;
    /* margin-left: 1rem; */
    margin-top: 22px;
  }
  .navbar-item img {
    max-height: 2.125rem;
    margin-top: 20px;
  }
  .navbar-item {
    a {
      color: ${props => props.theme.textColor} !important;
    }
    line-height: 30px;
    margin: 0;
    padding: 0;
    font-weight: 600 !important;
    margin-right: 16px;
    font-family: ${props => props.theme.fontFamilyThin};
    color: ${props => props.theme.textColor} !important;
    :hover {
      background: transparent !important;
    }
  }
  .navbar-burger {
    background-color: transparent;
    color: ${props => props.theme.mainBrandColor} !important;
  }
  .navbar-end {
    align-items: flex-end;
    font-family: ${props => props.theme.fontFamilyThin};
    color: ${props => props.theme.textColor} !important;
    font-weight: 600 !important;
  }
  .btn {
    padding: 20px 25px;
  }

  @media only screen and (max-width: 768px) {
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
`;

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMobileMenu = () => setMenuActive(!menuActive);
  return (
    <Section>
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
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <Link
                to="/"
                className="navbar-item has-text-weight-semibold is-size-6"
              >
                Home
              </Link>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link
                to="/business"
                className="navbar-item has-text-weight-semibold"
              >
                Business Users
              </Link>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link
                to="/faq"
                className="navbar-item has-text-weight-semibold is-size-6"
              >
                FAQs
              </Link>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link
                to="/contact"
                className="navbar-item has-text-weight-semibold"
              >
                Contact Us
              </Link>
            </div>
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
