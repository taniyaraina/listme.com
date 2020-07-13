import React, { useState } from 'react';
import styled from 'styled-components';

import ShopProductDisplay from './ShopProductDisplay';

import { theme } from '../utils/theme';

const Container = styled.div`
  .grey {
    color: ${theme.lightGrey} !important;
  }
  .lineHeight {
    line-height: 1.5rem;
  }
  input {
    border-radius: 100px;
    box-shadow: none;
    height: 3rem;
    ::placeholder {
      color: ${theme.textColor};
    }
  }
  textarea {
    border-radius: 20px;
    box-shadow: none;
    ::placeholder {
      color: ${theme.textColor};
    }
    height: 8rem;
  }
  .submit {
    border-radius: 100px;
    width: 12rem;
    box-shadow: none;
    font-weight: bold;
    background-image: radial-gradient(
      circle farthest-corner at 100% 150%,
      #d75dbc 10%,
      #6a4bc4 50%
    );
  }
  .selectButton {
    width: 100%;
    border-radius: 100px;
    font-weight: bold;
    /* box-shadow: 0px 15px 39px rgba(0, 0, 0, 0.2) !important; */
    box-shadow: none !important;
    color: ${theme.lightGrey} !important;
    border-width: 0px;
    background-color: transparent;
    transition: 0.6s;
    :hover {
      color: ${theme.darkAccent}!important;
    }
  }
  .buttonDiv {
    border: 0.1px solid ${theme.lightGrey};
    border-radius: 100px;
    @media screen and (max-width: 768px) {
      border-radius: 20px;
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
  .description {
    box-shadow: ${props =>
      props.selectedButton === 'description'
        ? '0px 15px 39px rgba(0, 0, 0, 0.2) !important'
        : ''};
    color: ${props =>
      props.selectedButton === 'description'
        ? `${theme.darkAccent} !important`
        : ''};
  }
  .additional {
    box-shadow: ${props =>
      props.selectedButton === 'additional'
        ? '0px 15px 39px rgba(0, 0, 0, 0.2) !important'
        : ''};
    color: ${props =>
      props.selectedButton === 'additional'
        ? `${theme.darkAccent} !important`
        : ''};
  }
  .reviews {
    box-shadow: ${props =>
      props.selectedButton === 'reviews'
        ? '0px 15px 39px rgba(0, 0, 0, 0.2) !important'
        : ''};
    color: ${props =>
      props.selectedButton === 'reviews'
        ? `${theme.darkAccent} !important`
        : ''};
  }
  .line {
    line-height: 1.8rem;
  }
  img {
    border-radius: 100px;
  }
`;

const Data = [
  {
    image: 'images/greenBook.jpg',
    title: 'Top 10 App Tips',
    actualPrice: '18.00',
  },
  {
    image: 'images/purpleBook.jpg',
    title: 'Ico For Dummies',
    cancelledPrice: '20.00',
    actualPrice: '18.00',
  },
  {
    image: 'images/purpleBook2.jpg',
    title: 'Ico The Smart Way',
    actualPrice: '25.00',
  },
  {
    image: 'images/purpleBook.jpg',
    title: 'App Successful Secrets',
    actualPrice: '25.00',
  },
];

const ProductInfoAndRelated = () => {
  const [selectedButton, _setSelectedButton] = useState('description');

  const RenderContent = option => {
    switch (option) {
      case 'description':
        return (
          <div className="has-text-centered pt-3 pb-6">
            <h1 className="subtitle is-6 line">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </h1>
          </div>
        );
      case 'additional':
        return (
          <div className=" py-4 columns is-multiline  is-mobile has-text-left">
            <div className="column is-2">
              <h1 className="title is-6">Dimensions</h1>
            </div>
            <div className="column is-10">
              <h1 className="subtitle is-6">10 x 12 x 0.5 in</h1>
            </div>
            <div className="column is-2">
              <h1 className="title is-6">Color</h1>
            </div>
            <div className="column is-10">
              <h1 className="subtitle is-6">Gray</h1>
            </div>
          </div>
        );
      case 'reviews':
        return (
          <div className="columns is-multiline is-vcentered">
            <div className="column is-1">
              <img
                alt="face"
                src="http://2.gravatar.com/avatar/8781126dc411ecf481e1cbaad60baadd?s=120&d=mm&r=g"
              />
            </div>
            <div className="column is-11">
              <h1 className="title is-4">Arnold Newman</h1>
              <h1 className="subtitle is-6 grey">February 28, 2019</h1>
              <h1 className="title is-6 has-text-weight-light lineHeight">
                We realised we really wanted to catch a glimpse of what went on
                behind the scenes of the companies we looked up to. And we
                thought other people would want to know too.
              </h1>
            </div>
            <div className="column is-12">
              <h1 className="title is-3"> Add a Review </h1>
              <h1 className="title is-6 has-text-weight-light">
                Your email address will not be published. Required fields are
                marked *
              </h1>
            </div>
            <div className="column is-6">
              <input className="input" placeholder="Name" />
            </div>
            <div className="column is-6">
              <input className="input" placeholder="Email" />
            </div>
            <div className="column is-12">
              <textarea className="textarea" placeholder="Your Review" />
            </div>
            <div className="column is-12">
              <button
                className="button is-medium submit is-primary"
                type="button"
              >
                Submit
              </button>{' '}
            </div>
          </div>
        );
      default:
        return true;
    }
  };

  return (
    <Container selectedButton={selectedButton} className="columns is-centered">
      <div className="column is-10">
        <div className="columns is-centered pt-4">
          <div className="column is-6">
            <div className="columns is-centered px-1 py-1 is-gapless has-text-centered buttonDiv">
              <div className="column is-3">
                <button
                  onClick={() => _setSelectedButton('description')}
                  type="button"
                  className="button selectButton description"
                >
                  Description
                </button>
              </div>
              <div className="column is-6">
                <button
                  onClick={() => _setSelectedButton('additional')}
                  type="button"
                  className="button selectButton additional"
                >
                  Additional Information
                </button>
              </div>
              <div className="column is-3">
                <button
                  onClick={() => _setSelectedButton('reviews')}
                  type="button"
                  className="button selectButton reviews"
                >
                  Reviews
                </button>
              </div>
            </div>
          </div>
        </div>
        {RenderContent(selectedButton)}
        <h1 className="title is-3 has-text-left">Related Products</h1>
        <div className="columns is-multiline">
          {Data.map((item, index) => (
            <div className="column is-3">
              <ShopProductDisplay
                actualPrice={item.actualPrice}
                image={item.image}
                title={item.title}
                cancelledPrice={item.cancelledPrice}
                lowerPrice={item.lowerPrice}
                index={index}
                small
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
export default ProductInfoAndRelated;
