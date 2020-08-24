import React from 'react';
import styled from 'styled-components';
import Heading from './elements/Heading';
import { theme } from '../utils/theme';
// import GoogleMap from './GoogleMap';
import PurpleButton from './elements/PurpleButton';

const Section = styled.div`
  .grey {
    color: ${theme.textColorLite} !important;
  }
  .smallText {
    line-height: 1.8;
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-family: ${theme.secondaryFontFamily};
  }
  .input {
    ::placeholder  {
      font-size: 16px !important;
      font-family: ${theme.secondaryFontFamily};
    }
  }
  .textarea {
    ::placeholder  {
      font-size: 16px !important;
      font-family: ${theme.secondaryFontFamily};
    }
  }
  .card {
    padding-top: 1rem;
    padding-bottom: 1rem;
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
    :hover{
      border-color:${theme.darkAccent};
    }
  }
  textarea {
    box-shadow: none;
    border-radius: 40px;
  }
  .btn{
    width: 12rem;
    height: 4rem;
  }
  .inputButton{
    width:13.5rem;
  }
  button {
    background: radial-gradient(circle farthest-corner at 100% 150%,#68044d 10%,#9d2b7e 50%);
    );
    transition: 0.6s;
    color: ${theme.backgroundColor};
    background-color: ${theme.darkAccent};
    box-shadow:${props => props.theme.buttonBoxShadow} !important;
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
    title: 'Address: 20-22 Wenlock Road London N1 7GU',
    subtitle: '27 Division St, New York, NY 10002, USA',
  },
  {
    icon: 'fas fa-envelope',
    title: 'Mail Us: hello@listmeapp.co',
    subtitle: 'softlab@mail.com',
  },
  {
    icon: 'fas fa-phone',
    title: 'WhatsApp: +442080401901',
    subtitle: '+8 (256) 256 145 587',
  },
];

const ContactUs = () => {
  return (
    <Section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half is-offset-is-three-quarters has-text-centered">
            <Heading title="Get in Touch" />
            <h1 className="title smallText grey has-text-weight-light is-size-6">
              Got a question you would like to ask? Take five minutes to fill
              out our form so that we can get to know you and understand your
              query.
            </h1>
            {Data.map(item => (
              <div className="columns is-vcentered">
                <div className="column is-2">
                  <div className="card ">
                    <span className="icon is-size-4 ">
                      <i className={item.icon} />
                    </span>
                  </div>
                </div>
                <div className="column">
                  <h1 className="title is-6 has-text-weight-normal mb-5">
                    {item.title}
                  </h1>
                </div>
              </div>
            ))}
            <PurpleButton
              title="Book A Demo"
              className="is-medium has-text-weight-semibold mb-6 btn"
            />
            <h1 className="title is-4 has-text-weight-bold has-text-left">
              Drop Us a Line
            </h1>
            <input className="input is-medium" placeholder="Your Name *" />
            <input className="input is-medium" placeholder="Your Email *" />
            <textarea
              className="textarea is-medium"
              placeholder="Your Message *"
            />
            <div className="has-text-left">
              <PurpleButton
                title="Send A Message"
                className="is-medium mt-4 inputButton"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default ContactUs;
