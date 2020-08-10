import React from 'react';
import styled from 'styled-components';
import Heading from './elements/Heading';
import { theme } from '../utils/theme';
import GoogleMap from './GoogleMap';
import PurpleButton from './elements/PurpleButton';

const Container = styled.div`
  .greenColor {
    color: ${theme.hoverColor} !important;
  }
  .grey {
    color: ${theme.textColorLite} !important;
  }
  .smallText {
    /* font-size: 0.9rem; */
    line-height: 1.8;
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-family: ${theme.secondaryFontFamily};
  }
  .input {
    ::placeholder {
      font-size: 1rem !important;
    }
  }
  .card {
    padding-right: 1rem;
    padding-left: 1rem;
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
  .icon {
    color: ${theme.mainBrandColor};
  }
  input {
    border-radius: 100px;
    margin-bottom: 1rem;
    box-shadow: none;
  }
  textarea {
    box-shadow: none;
    border-radius: 40px;
  }
  button {
    background-image: radial-gradient(
      circle farthest-corner at 100% 150%,
      #d75dbc 10%,
      #6a4bc4 50%
    );
    transition: 0.6s;
    color: ${theme.backgroundColor};
    background-color: ${theme.darkAccent};
    :hover {
      background-image: none;
      color: ${theme.backgroundColor};
      background-color: ${theme.darkAccent};
    }
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
    <Container>
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <GoogleMap />
          </div>
          <div className="column is-1" />
          <div className="column is-5">
            <Heading subtitle={`< our_contacts >`} title="Get in Touch" />
            <h1 className="title smallText grey has-text-weight-light is-size-6">
              Got a project in mind? We’d love to hear about it. Take five
              minutes to fill out our project form so that we can get to know
              you and understand your project.
            </h1>
            {Data.map(item => (
              <div className="columns is-mobile">
                <div className="column is-2">
                  <div className="card ">
                    <span className="icon is-size-4 ">
                      <i className={item.icon} />
                    </span>
                  </div>
                </div>
                <div className="column mb-4">
                  <h1 className="title is-6 has-text-weight-semibold mb-5">
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
            <PurpleButton title="Send A Message" className="is-medium" />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default ContactUs;
