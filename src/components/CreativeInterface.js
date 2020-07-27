import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';
import ImageCollection2 from './ImageCollection2';

const Container = styled.div`
  .greenColor {
    color: ${theme.hoverColor} !important;
  }
  .is-6 {
    font-size: 1rem;
    line-height: 1.5rem;
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

const CreativeInterface = () => {
  return (
    <section className="section">
      <Container className="columns is-centered ">
        <div className="column is-5">
          <h1 className="title is-5 greenColor">{`< creative_interface >`}</h1>
          <div className="columns">
            <div className="column is-10">
              <h1 className="title is-2 has-text-weight-bold">
                Your Own Crypto Wallet Credit Card
              </h1>
            </div>
          </div>
          <h1 className="subtitle is-6">
            We create e-commerce solutions and slick, eye-pleasing and
            user-friendly online stores, that let you focus on your business.
            The most popular form of e-commerce is the online store. It is
            nothing but a website with a catalog of products and the possibility
            of buying them by visitors.
          </h1>
          <button type="button" className="button is-medium">
            Get the App
          </button>
          <a href="/" className="icon ">
            <i className="fab fa-apple has-text-primary"></i>
          </a>
          <a href="/" className="icon">
            <i className=" fab fa-android has-text-primary"></i>
          </a>
        </div>
        <div className="column is-5">
          <ImageCollection2 />
        </div>
      </Container>
    </section>
  );
};
export default CreativeInterface;
