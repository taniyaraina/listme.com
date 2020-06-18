import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 100%;
  .w {
    transform: translate(20%, 2%);
    @media screen and (max-width: 600px) {
      min-height: 15rem;
      min-width: 20rem;
    }
  }
  .wallapp {
    transform: translate(20%, -280%);
  }
`;

const ImageCollection = () => {
  return (
    <Container className="container">
      <figure className="">
        <img src="images/w.png" alt="w" className="w" />
      </figure>
      <img src="images/wallapp.png" alt="wallapp" className="wallapp" />
    </Container>
  );
};
export default ImageCollection;
