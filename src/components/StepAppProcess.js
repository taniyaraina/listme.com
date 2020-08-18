import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  h1 {
    padding-left: 3rem;
    padding-right: 3rem;
    font-family: ${props => props.theme.primaryFontFamily};
    line-height: 2.5rem;
  }
`;

const StepAppProcess = () => {
  return (
    <Section className="section">
      <div className="columns">
        <div className="column is-5">
          <h1 className="is-size-3 has-text-weight-bold">
            Steps for you to be digitized
          </h1>
          <figure className="image is-1by1">
            <img src="images/Steps-image.png" alt="appimage" />
          </figure>
        </div>
        <div className="column">Second column</div>
      </div>
    </Section>
  );
};
export default StepAppProcess;
