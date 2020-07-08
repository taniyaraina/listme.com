import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import UseAnimations from 'react-useanimations';
import PurpleButton from './elements/PurpleButton';

const Section = styled.div`
  padding: 1.5rem 1.5rem !important;
  font-family: ${props => props.theme.primaryFontFamily};
  .navbar {
    background-color: transparent;
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
    font-weight: 600 !important;
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
  @media screen and (max-width: 1023px) {
    i {
      color: ${props => props.theme.backgroundColor};
    }
    background-color: ${props => props.theme.headerColor};
    .hidden {
      display: none;
    }
    .navbar-burger {
      margin-left: 10px;
    }
    .navbar-menu {
      position: absolute;
      width: 100%;
      transition: 0.6s;
    }
    .image-to-hide {
      display: none;
    }
    .image-to-show {
      display: inline;
    }
  }
  .image-to-show-image {
    width: auto;
    min-height: 2rem;
  }
  .searchBox {
    position: absolute;
    top: 7rem;
    right: 40%;
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
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleMobileMenu() {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;

    return (
      <Section className="section">
        <nav
          className="navbar is-fixed"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link className="navbar-item image-to-hide" to="/">
              <img src="/images/softlab.png" alt="site logo" />
            </Link>
            <a
              href="#"
              role="button"
              className={
                isActive
                  ? 'navbar-burger burger mobile is-active'
                  : 'navbar-burger burger mobile'
              }
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={() => this.handleMobileMenu()}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
            <div className="navbar-start">
              <div className="navbar-item has-dropdown is-hoverable">
                <Link to="/" className="navbar-link">
                  Home
                </Link>
                <div className="navbar-dropdown">
                  <a className="navbar-item">Home 1</a>
                  <a className="navbar-item">Home 2</a>
                  <a className="navbar-item">Home 3</a>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <Link to="/about" className="navbar-link">
                  Pages
                </Link>
                <div className="navbar-dropdown">
                  <a className="navbar-item">About</a>
                  <a className="navbar-item">Jobs</a>
                  <a className="navbar-item">Contact</a>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <Link to="/blog" className="navbar-link">
                  Blog
                </Link>
                <div className="navbar-dropdown">
                  <a className="navbar-item">About</a>
                  <a className="navbar-item">Jobs</a>
                  <a className="navbar-item">Contact</a>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <Link to="/portfolio" className="navbar-link">
                  Portfolio
                </Link>
                <div className="navbar-dropdown">
                  <a className="navbar-item">About</a>
                  <a className="navbar-item">Jobs</a>
                  <a className="navbar-item">Contact</a>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <Link to="/shop" className="navbar-link">
                  Shop
                </Link>
                <div className="navbar-dropdown">
                  <a className="navbar-item">About</a>
                  <a className="navbar-item">Jobs</a>
                  <a className="navbar-item">Contact</a>
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
                src="/images/logo_light.png"
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
              <PurpleButton title="Try Now" />
            </div>
          </div>
        </nav>
      </Section>
    );
  }
}
