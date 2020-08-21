import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PurpleButton from './elements/PurpleButton';
import { theme } from '../utils/theme';

const Section = styled.div`
  padding: 1.5rem 1.5rem !important;
  font-family: ${props => props.theme.primaryFontFamily};
  .navbar {
    background-color: rgba(255, 255, 255, 1);
    padding: 1rem 1.875rem 1rem 1.875rem;
  }
  .navbar-start {
    flex: 1;
    justify-content: center;
    margin-right: 2rem;
  }
  .navbar-item img {
    max-height: 2.125rem;
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
    background-color: #1c1323;
    color: #fff;
    opacity: 0.6;
    border-radius: 4px;
    margin-left: 0px;
  }
  .btn {
    padding: 20px 22px;
  }

  @media only screen and (max-width: 768px) {
    .navbar {
      background-color: ${theme.textColor};
      padding: 0;
    }
    .navbar-menu {
      height: 100vh;
    }
    .navbar-brand {
      align-items: center;
      justify-content: space-between;
    }
    .hidden {
      display: none;
    }
  }
`;

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMobileMenu = () => setMenuActive(!menuActive);
  return (
    <Section className="section">
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
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
                Bussiness Users
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
                Contact us
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item hidden">
            <PurpleButton
              size
              title="ListMe Now"
              className="btn"
              href="https://apps.apple.com/in/app/listme-app/id1462565783"
              size="14"
            />
          </div>
        </div>
      </nav>
    </Section>
  );
};
export default Header;
