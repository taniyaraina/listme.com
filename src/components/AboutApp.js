import React from 'react';
import styled from 'styled-components';
import Heading from './elements/Heading';
import { theme } from '../utils/theme';

const Container = styled.div`
  .lineHeight {
    font-family: ${props => props.theme.secondaryFontFamily};
    line-height: 2rem;
    margin-top: 1rem;
  }
  img {
    max-width: fit-content;
  }
  @media (max-width: 600px) {
    .sidebarImage {
      display: none;
    }
  }
  .icon {
    margin-top: 1rem;
    margin-left: 0.5rem;
  }
  button {
    padding: 0rem 3rem;
    height: 3.5rem;
    border-radius: 100px;
    transition: 0.5s;
    box-shadow: none;
    font-weight: bold;
    border-color: ${theme.darkAccent};
    :hover {
      background-color: #6a4bc4 !important;
      color: ${theme.backgroundColor};
    }
  }
`;

const AboutApp = () => {
  return (
    <Container className="container">
      <section className="section">
        <div className="columns is-gapless is-vcentered">
          <div className="column is-5">
            <Heading
              subtitle={`<about app>`}
              title="Starting with App is Easier Than Anything!"
            />
            <h1 className="title is-6 lineHeight has-text-weight-normal">
              We started our app because we wanted to make it easy for
              businesses to accept bitcoin payments. We are currently the
              largest bitcoin payment processor in the world, serving
              industry-leading merchants on six continents. We’ve created a
              seamless, secure bitcoin.
            </h1>
            <button type="button" className="button is-medium">
              Get the App
            </button>
            <a href="/" className="icon ">
              <i className="fab fa-apple has-text-primary" />
            </a>
            <a href="/" className="icon">
              <i className=" fab fa-android has-text-primary" />
            </a>
          </div>
          <div className="column is-6 has-text-centered sidebarImage">
            <div className="columns is-variable is-4 has-text-centered">
              <div className="column is-6">
                <img src="/images/SlidingPhone.png" />
              </div>
              <div className="column is-6">
                <img src="/images/SlidingPhone.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};
export default AboutApp;
