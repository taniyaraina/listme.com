import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import UseAnimations from 'react-useanimations';
import PurpleButton from './elements/PurpleButton';
import { theme } from '../utils/theme';

const Section = styled.div`
  padding: 1.5rem 1.5rem !important;
  font-family: ${props => props.theme.primaryFontFamily};
  .navbar {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    background-color: rgba(255, 255, 255, 1);
  }
  @media only screen and (max-width: 1024px) {
    .navbar {
      background-color: ${theme.textColor};
      padding-top: 0;
      padding-bottom: 0;
      display: flex;
    }
  }
  .navbar-item img {
    max-height: 2.375rem;
  }
  .image-to-show {
    display: none;
    position: relative;
    left: -50%;
  }
  .absolute-position {
    margin-top: 2rem;
    position: absolute;
    left: 50%;
    top: 10px;
  }
  .navbar-menu {
    @media screen and (min-width: 1180px) {
      padding-left: 8rem;
    }
  }
  .navbar-item {
    a {
      color: ${props => props.theme.textColor} !important;
    }
    font-weight: 500 !important;
    padding-top: 0rem;
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
  }
  @media screen and (max-width: 1024px) {
    i {
      color: ${props => props.theme.backgroundColor};
    }
    background-color: ${props => props.theme.headerColor};
    .hidden {
      display: none;
    }
    .navbar-burger {
      margin-left: 10px;
      margin-top: 2.2rem;
    }
    .navbar-menu {
      position: absolute;
      width: 100%;
      transition: 0.6s;
    }
    .navbar-end {
      margin-left: 15rem;
      margin-top: 3rem;
    }
    .image-to-hide {
      display: none;
    }
    .image-to-show {
      display: inline;
    }
    .searchBar {
      color: ${theme.backgroundColor} !important;
    }
  }
  .image-to-show-image {
    width: auto;
    min-height: 2rem;
  }
  .navbar-link:not(.is-arrowless)::after,
  .select:not(.is-multiple):not(.is-loading)::after {
    border: 3px solid transparent;
    color: #161616;
    content: '+';
    transform: rotate(-90deg);
    width: 0.9em;
  }
  .navbar-link:not(.is-arrowless) {
    padding-right: 2em;
  }
  .Navbutton {
    padding: 1rem 2rem 1rem 2rem;
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
            <img src="/images/listmelogo.png" alt="site logo" />
          </Link>
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
        </div>
        <div className={menuActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/" className="navbar-link">
                Home
              </Link>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/about" className="navbar-link">
                About
              </Link>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/blog-grid" className="navbar-link">
                Blog
              </Link>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/shop" className="navbar-link">
                Shop
              </Link>
              <div className="navbar-dropdown">
                <Link to="/shop">
                  <a className="navbar-item">Shop</a>
                </Link>
                <Link to="/product">
                  <a className="navbar-item">Product</a>
                </Link>
                <Link to="/cart">
                  <a className="navbar-item">Cart</a>
                </Link>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/contact" className="navbar-link">
                Contacts
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute-position">
          <Link className="navbar-item image-to-show" to="/">
            <img
              src="/images/listmelogo.png"
              className="image-to-show-image"
              alt="site logo"
            />
          </Link>
        </div>
        <div className="navbar-end">
          <UseAnimations
            className="navbar-item searchBar"
            animationKey="searchToX"
            size={50}
          />
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
            <PurpleButton title="Try Free" className="Navbutton" />
          </div>
        </div>
      </nav>
    </Section>
  );
};
export default Header;
