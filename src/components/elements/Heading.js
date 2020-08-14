import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .title.is-5 {
    margin-bottom: 1rem !important;
    color: ${props => props.theme.darkAccent};
    font-family: ${props => props.theme.primaryFontFamily};
    font-weight: 400;
  }
  .title.is-3 {
    line-height: 1.4 !important;
    font-size: 36px !important;
  }
`;

const Heading = ({ subtitle, title }) => (
  <Section>
    <h1 className="title is-5">{subtitle}</h1>
    <h1 className="title is-3 has-text-weight-bold has-text-black">{title}</h1>
  </Section>
);
export default Heading;
