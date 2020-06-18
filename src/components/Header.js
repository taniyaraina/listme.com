/* eslint global-require: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import PurpleButton from './elements/PurpleButton';

const Section = styled.section`
  padding: 1rem 0rem;
  font-family: ${props => props.theme.primaryFontFamily};
  img {
    max-width: 17rem;
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
  .navbar-menu {
    @media screen and (max-width: 600px) {
      position: absolute;
      width: 100%;
      transition: 0.6s;
    }
  }
  .navbar-item {
    font-weight: 400;
    font-size: 1.2rem;
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
              <Link className="navbar-item" to="/">
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
                <Link to="/contact" className="navbar-item">
                  Shop
                </Link>
                <Link to="/contact" className="navbar-item">
                  Contact
                </Link>
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                  <span className="has-text-weight-light subtitle is-3">
                    <i className="fas fa-search" />
                  </span>
                </div>
                <div className="navbar-item">
                  <PurpleButton title="Try Free" />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </Section>
    );
  }
}
