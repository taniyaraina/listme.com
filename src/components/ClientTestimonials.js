import React from 'react';
import styled from 'styled-components';
import Heading from './elements/Heading';

const Container = styled.div`
  img {
    border-radius: 40px;
  }
  p {
    line-height: 1.875;
    margin-bottom: 2rem;
    margin-top: 2rem;
    font-size: ${props => props.theme.fontSizeMedium}px !important;
  }
  .column.is-6 {
    margin-left: 3rem;
  }
  .subtitle {
    color: #8b9baf;
    font-family: ${props => props.theme.primaryFontFamily}px !important;
  }
`;

const TheySay = () => {
  return (
    <section className="section">
      <div className="container">
        <Container className="columns">
          <div className="column is-5">
            <img src="/images/ListMeTrio1-1.jpg" alt="personComputer" />
          </div>
          <div className="column is-offset-1">
            <Heading subtitle="They Say" title="Clients Testimonials" />
            <p>
              “I went to Rozu Dining for a throwback brunch that they held there
              and the process was so easy! No issues on the door, it was quick
              and simple. I also keep in touch with someone I met through the
              event on there too which I thought was a good feature. ”
            </p>
            <div className="content">
              <h1 className="title is-5">Email Id</h1>
              <h2 className="subtitle is-6 has-text-grey-lighter has-text-weight-normal">
                User
              </h2>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
export default TheySay;
