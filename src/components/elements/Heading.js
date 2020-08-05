import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .title.is-5 {
    margin-bottom: 1rem !important;
  }
  .title.is-3 {
    line-height: 1.4 !important;
  }
`;

const Heading = ({ subtitle, title }) => (
  <Section>
    <h1 className="title is-5 has-text-weight-medium has-text-primary">
      {subtitle}
    </h1>
    <h1 className="title is-3 has-text-weight-bold has-text-black">{title}</h1>
  </Section>
);
export default Heading;
