import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';
import GoogleMap from './GoogleMap';

const Container = styled.div`
  .greenColor {
    color: ${theme.hoverColor} !important;
  }
  .grey {
    color: ${theme.textColorLite} !important;
  }
  .smallText {
    font-size: 0.9rem;
    line-height: 1.3rem;
  }
  .card {
    padding-right: 2rem;
    padding-left: 0.8rem;
    padding-top: 0.8rem;
    padding-bottom: 0.6rem;
    transition: 0.6s;
    border-radius: 10px;
    :hover {
      background-color: ${theme.darkAccent};
      span {
        color: ${theme.backgroundColor};
      }
    }
  }
  .up {
    margin-top: -1rem;
  }
  input {
    border-radius: 100px;
    margin-bottom: 1rem;
  }
  textarea {
    border-radius: 40px;
  }
  button {
    color: ${theme.backgroundColor};
    background-color: #6a4bc4;
    padding: 0rem 2rem;
    font-weight: bold;
    border-radius: 50px;
  }
`;

const Data = [
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Visit Us:',
    subtitle: '27 Division St, New York, NY 10002, USA',
  },
  {
    icon: 'fas fa-envelope',
    title: 'Mail Us:',
    subtitle: 'softlab@mail.com',
  },
  {
    icon: 'fas fa-phone',
    title: 'Phone Us:',
    subtitle: '+8 (256) 256 145 587',
  },
];

const ContactUs = () => {
  return (
    <Container className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <GoogleMap />
          </div>
          <div className="column is-1" />
          <div className="column is-5">
            <h1 className="title is-6 greenColor">{`< our_contacts >`}</h1>
            <h1 className="title is-2 has-text-weight-bold">Get in Touch</h1>
            <h1 className="title smallText grey has-text-weight-light">
              Got a project in mind? We’d love to hear about it. Take five
              minutes to fill out our project form so that we can get to know
              you and understand your project.
            </h1>
            {Data.map(item => (
              <div className="columns is-mobile">
                <div className="column is-2">
                  <div className="card ">
                    <span className="icon is-size-3 ">
                      <i className={item.icon} />
                    </span>
                  </div>
                </div>
                <div className="column">
                  <h1 className="title is-5 has-text-weight-bold">
                    {item.title}
                  </h1>
                  <h1 className="title is-6 has-text-weight-normal up">
                    {item.subtitle}
                  </h1>
                </div>
              </div>
            ))}
            <h1 className="title is-4 has-text-weight-bold">Drop Us a Line</h1>
            <input className="input is-medium" placeholder="Your Name *" />
            <input className="input is-medium" placeholder="Your Email *" />
            <textarea
              className="textarea is-medium"
              placeholder="Your Message *"
            />
            <button className="button is-medium" type="button">
              Send a Message
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default ContactUs;
