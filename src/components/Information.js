import React from 'react';
import styled from 'styled-components';
import PurpleButton from './elements/PurpleButton';
import FaqItem from './FaqItem';

const Section = styled.div`
  .maincolm {
    margin-top: 2rem;
  }
  h1 {
    line-height: 3rem;
    font-family: ${props => props.theme.primaryFontFamily};
  }
`;

const Information = () => {
  return (
    <Section className="section">
      <div className="container">
        <div className="columns is-centered maincolm">
          <div className="column is-12">
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
                <FaqItem
                  questions="Can I try before I buy?"
                  answer="Yes sign up today and let our activation team walk you through the DEMO.The service is free. "
                />
                <FaqItem
                  questions="What payment methods do you accept?"
                  answer="As long as you have a bank account registered in your country we can get you up and running in no time. You can start accepting mobile payments right away. (cashless society) "
                />
                <FaqItem
                  questions="How do I create events?"
                  answer="Once your account is activated you can create the events via the dashboard. Simple and easy."
                />
                <FaqItem
                  questions="How do my subscribers get on the guestlist for my events?"
                  answer="A user can download the app and get on the guestlist within seconds, providing the event is not sold out."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Information;
