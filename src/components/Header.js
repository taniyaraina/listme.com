import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import UseAnimations from 'react-useanimations';

import PurpleButton from './elements/PurpleButton';

const Section = styled.section`
  padding: 1rem 0rem;
  font-family: ${props => props.theme.primaryFontFamily};
  img {
    max-width: 15rem;
  }
  .navbar {
    background-color: transparent;
  }
  .navbar-brand {
    margin-right: 20px;
    .navbar-item img {
      max-height: 3.75rem;
    }
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
      padding-left: 4rem;
    }
  }
  .navbar-item {
    font-weight: 500;
    padding-top: 0rem;
    font-family: ${props => props.theme.fontFamilyThin};
    transition: 1s;
    :hover {
      color: ${props => props.theme.darkAccent};
      background-color: transparent;
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
      /* height: ${window.innerHeight}px !important; */
      transition: 0.6s;
    }
    .image-to-hide {
      display: none;
    }
    .image-to-show {
      display: inline;
    }
    .searchBar {
      position: absolute;
      top: 5px;
      right: 0;
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
      <Section>
        <div>
          <nav
            className="navbar"
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
                <Link to="/" className="navbar-item">
                  Home
                </Link>
                <Link to="/about" className="navbar-item">
                  Pages
                </Link>
                <Link to="/news" className="navbar-item">
                  Blog
                </Link>
                <Link to="/contact" className="navbar-item">
                  Portfolio
                </Link>
                <Link to="/shop" className="navbar-item">
                  Shop
                </Link>
                <Link to="/contact" className="navbar-item">
                  Contact
                </Link>
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
              <div className="navbar-item searchBar">
                <UseAnimations animationKey="searchToX" size={30} />
              </div>
              <div className="navbar-item hidden">
                <PurpleButton title="Try Free" />
              </div>
              {/* <div className="searchBox">
                <SearchBox />
              </div> */}
            </div>
          </nav>
        </div>
      </Section>
    );
  }
}
