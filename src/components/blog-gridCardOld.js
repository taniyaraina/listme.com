import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  padding: 0rem 1rem;
  img {
    object-fit: cover;
    height: 17rem;
    border-radius: 30px;
    transition: 0.6s;
  }
  .card {
    margin: 0rem;
    display: inline-block;
    padding: 0.5rem 2.5rem;
    border-radius: 100px;
    box-shadow: none;
    transform: rotateZ(90deg) translateY(7rem) translateX(10rem);
    color: ${theme.lightGrey} !important;
    transition: 0.6s;
    z-index: 2;
  }
  .category {
    padding-top: 1.6rem;
    color: ${theme.hoverColor} !important;
  }
  .hoverDiv {
    transition: 0.6s;
    :hover {
      .card {
        color: ${theme.darkAccent} !important;
        box-shadow: rgba(0, 0, 0, 0.08) 0px 7px 18px;
      }
      img {
        filter: brightness(50%);
      }
    }
  }
  .comment {
    color: ${theme.hoverColor};
  }
  .heart {
    color: red;
  }
  .icon {
    width: 2rem;
  }
  .marg {
    margin-right: 10px;
  }
  .wrapper {
    display: flex;
  }
`;
const Comment = styled.div`
  margin-right: 2rem;
`;

const BlogGridCard = () => {
  return (
    <Container>
      <div className="hoverDiv">
        <h1 className="card title is-6">February 14,2019</h1>
        <img
          src="http://softlab.wgl-demo.net/wp-content/uploads/2019/02/blog_10-1170x725.jpg"
          alt="phone"
        />
      </div>
      <h1 className="title is-6 category">apps / business</h1>

      <h1 className="title is-4 has-text-weight-bold">
        Facts & Tips About Bitcoin Miner Fees
      </h1>
      <h1 className="is-6 has-text-weight-light wrapper">
        <Comment>
          <span className="icon comment">
            <i className="far fa-comment" />
          </span>
          2 Comments
        </Comment>
        <span className="icon heart">
          <i className="far fa-heart marg" />
          24
        </span>
      </h1>
    </Container>
  );
};
export default BlogGridCard;
