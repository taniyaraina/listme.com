import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .card {
    margin-bottom: 5rem;
    width: 85%;
    border-radius: 2rem;
  }
  img {
    height: auto;
    width: 30%;
    position: absolute;
    left: 33%;
    top: -23%;
  }
`;

const CardOne = [
  {
    img: 'images/step-1.png',
    name: 'Step One',
    alterEgo: 'Create an account within minutes',
  },
  {
    img: 'images/step-3.png',
    name: 'Step Three',
    alterEgo:
      'Create the events for the whole year within a seamless number of clicks.',
  },
  {
    img: 'images/step-5.png',
    name: 'Step Five',
    alterEgo:
      'Respond to guests questions within seconds with the in-chat feature',
  },
];

const CardTwo = [
  {
    img: 'images/step-2.png',
    name: 'Step Two',
    alterEgo:
      'Connect your database to the ListMe ecosystem and we will automatically inform the customers to download the app to see your events.',
  },
  {
    img: 'images/step-6.png',
    name: 'Step Four',
    alterEgo:
      'ListMe will manage and verify all IDs and support contactless social change in behaviour.',
  },
  {
    img: 'images/step-6.png',
    name: 'Step Six',
    alterEgo: 'Events Made Simple. Try it for free today.',
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
                  <h1 className="title is-5 has-text-weight-semibold">
                    {' '}
                    {item.name}
                  </h1>
                  <div className="content">
                    <p className="subtitle has-text-weight-light has-text-grey-lighter">
                      {item.alterEgo}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="column">
            {CardTwo.map(item => (
              <div className="card">
                <div className="card-content">
                  <img src={item.img} alt="IconImage" />
                  <h1 className="title is-5 has-text-weight-semibold">
                    {item.name}
                  </h1>
                  <div className="content">
                    <p className="subtitle has-text-weight-light has-text-grey-lighter">
                      {item.alterEgo}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
export default CardSteps;
