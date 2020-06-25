import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
`;

const OurPartner = () => {
  return (
    <Container>
      <div className="columns is-gapless is-centered">
        <div className="column is-10 has-text-centered">
          <h1 className="subtitle is-5 has-text-weight-bold">OUR PARTNERS</h1>
          <div className="columns has-text-centered">
            <h1></h1>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default OurPartner;
