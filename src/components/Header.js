import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
// import UseAnimations from 'react-useanimations';
import PurpleButton from './elements/PurpleButton';
import { theme } from '../utils/theme';

const Section = styled.div`
  padding: 1.5rem 1.5rem !important;
  font-family: ${props => props.theme.primaryFontFamily};
  .navbar {
    background-color: rgba(255, 255, 255, 1);
    padding: 1.3rem 1rem 0.8rem 1rem;
  }
  .navbar-start {
    flex: 1;
    justify-content: center;
  }
  .navbar-item img {
    max-height: 2.375rem;
  }
  .navbar-item {
    a {
      color: ${props => props.theme.textColor} !important;
    }
    font-weight: 500 !important;
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
  .btn{
    padding: 18px 22px;
  }
  /* .searchBar {
    margin-right: 1rem;
  } */
  /* .navbar-link:not(.is-arrowless)::after,
  .select:not(.is-multiple):not(.is-loading)::after {
    border: 3px solid transparent;
    color: #161616;
    content: '+';
    transform: rotate(-90deg);
    width: 0.9em;
    margin-top: -4px;
  } */
  /* .navbar-link:not(.is-arrowless) {
    padding-right: 2em;
  } */
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
    /* .searchBar {
      color: ${theme.backgroundColor} !important;
    } */
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
            {/* <UseAnimations
              className="navbar-item searchBar is-hidden-desktop"
              animationKey="searchToX"
              size={50}
            /> */}
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
              <Link to="/" className="navbar-item has-text-weight-semibold">
                Home
              </Link>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link
                to="/about"
                className="navbar-item has-text-weight-semibold"
              >
                Bussiness
              </Link>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/faq" className="navbar-item has-text-weight-semibold">
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
          {/* <UseAnimations
            className="navbar-item searchBar is-hidden-touch"
            animationKey="searchToX"
            size={50}
          /> */}
          {/* <Search className="header_search-field">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Find a repository"
                  />
                </div>
                <div className="control">
                  <a className="button is-info">Search</a>
                </div>
              </div>
            </Search> */}
          <div className="navbar-item hidden">
            <PurpleButton
              title="ListMe Now"
              className="btn"
              href="https://apps.apple.com/in/app/listme-app/id1462565783"
            />
          </div>
        </div>
      </nav>
    </Section>
  );
};
export default Header;
