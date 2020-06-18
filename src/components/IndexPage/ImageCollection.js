import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 100%;
  .w {
    position: absolute;
    transform: translateX(8rem);
  }
  .wallapp {
    position: absolute;
    transform: translate(45%, 10%);
  }
`;

const ImageCollection = () => {
  return (
    <Container className="container">
      <img src="images/w.png" alt="w" className="w" />
      <img src="images/wallapp.png" alt="wallapp" className="wallapp" />
    </Container>
  );
};
export default ImageCollection;
