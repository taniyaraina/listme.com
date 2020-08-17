import React from 'react';
import styled from 'styled-components';
import PurpleButton from './elements/PurpleButton';
import FaqItem from './FaqItem';

const Section = styled.div`
  h1 {
    line-height: 3rem;
    font-family: ${props => props.theme.primaryFontFamily};
  }
`;

const Information = () => {
  return (
    <Section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-11">
            <div className="columns is-variable is-8">
              <div className="column is-4">
                <h1 className="is-size-3 has-text-weight-bold has-text-right">
                  All your business questions answered.
                </h1>
                <PurpleButton
                  title="Get in Touch"
                  className="mt-6 is-pulled-right"
                />
              </div>
              <div className="column">
                <FaqItem questions="hhdfmnfdjfkdjknk" answer="jdfbjdhfbjdhf" />
                <FaqItem questions="hhdfmnfdjfkdjknk" answer="jdfbjdhfbjdhf" />
                <FaqItem questions="hhdfmnfdjfkdjknk" answer="jdfbjdhfbjdhf" />
                <FaqItem questions="hhdfmnfdjfkdjknk" answer="jdfbjdhfbjdhf" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Information;
