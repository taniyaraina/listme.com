import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .card {
    margin-bottom: 5rem;
    width: 85%;
    border-radius: 2rem;
    box-shadow: 0px 15px 38px 0px rgba(0, 0, 0, 0.1);
  }
  img {
    height: auto;
    width: 30%;
    margin-top: -4rem;
  }
  p {
    font-family: ${props => props.theme.secondaryFontFamily} !important;
  }
`;

const SecondCard = styled.div`
  margin-top: 2rem;
`;

const CardOne = [
  {
    img: 'images/step-1.png',
    title: 'Step One',
    subtitle: 'Create an account within minutes',
  },
  {
    img: 'images/step-3.png',
    title: 'Step Three',
    subtitle:
      'Create the events for the whole year within a seamless number of clicks.',
  },
  {
    img: 'images/step-5.png',
    title: 'Step Five',
    subtitle:
      'Respond to guests questions within seconds with the in-chat feature',
  },
];

const CardTwo = [
  {
    img: 'images/step-2.png',
    title: 'Step Two',
    subtitle:
      'Connect your database to the ListMe ecosystem and we will automatically inform the customers to download the app to see your events.',
  },
  {
    img: 'images/safety-Icon.png',
    title: 'Step Four',
    subtitle:
      'ListMe will manage and verify all IDs and support contactless social change in behaviour.',
  },
  {
    img: 'images/step-6.png',
    title: 'Step Six',
    subtitle: 'Events Made Simple. Try it for free today.',
  },
];

const CardSteps = () => {
  return (
    <Section className="section">
      <div className="container">
        <div className="columns is-multiline has-text-centered is-variable is-4">
          <div className="column">
            {CardOne.map(item => (
              <div className="card">
                <div className="card-content">
                  <img src={item.img} alt="IconImage" />
                  <h1 className="is-5 has-text-weight-bold"> {item.title}</h1>
                  <div className="content">
                    <p className="is-size-6 has-text-weight-light has-text-grey-lighter">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="column">
            {CardTwo.map(item => (
              <SecondCard className="card ">
                <div className="card-content">
                  <img src={item.img} alt="IconImage" />
                  <h1 className="is-5 has-text-weight-bold">{item.title}</h1>
                  <div className="content">
                    <p className="is-size-6 has-text-weight-light has-text-grey-lighter">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </SecondCard>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
export default CardSteps;
