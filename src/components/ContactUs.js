import React from 'react';
import styled from 'styled-components';
import Heading from './elements/Heading';
import { theme } from '../utils/theme';
import PurpleButton from './elements/PurpleButton';

const Section = styled.div`
  .smallText {
    color: ${theme.textColorLite} !important;
    line-height: 1.8;
    font-family: ${theme.secondaryFontFamily};
  }
  .input,.textarea {
    ::placeholder  {
      font-size: 16px !important;
      font-family: ${theme.secondaryFontFamily};
      font-weight:600;
    }
  }
  .card {
    width: 4rem;
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
  .icon {
    color: ${theme.mainBrandColor};
  }
  .column.is-2{
    display: flex;
    justify-content: center;
  }
  input {
    border-radius: 100px;
    margin-bottom: 1rem;
    box-shadow: none;
    :hover{
      border-color:${theme.darkAccent};
    }
    :active{
      border-color: ${theme.mainBrandColor};
      box-shadow:none;
    }
  }
  textarea {
    box-shadow: none;
    border-radius: 40px;
  }
  .textarea, input:focus {
    border-color: 0000;
    box-shadow:none;
}
  .btn{
    width: 12rem;
    height: 4rem;
  }
  .inputButton{
    width: 13.5rem;
    height: 3rem
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
  },
  {
    icon: 'fas fa-envelope',
    title: 'Mail Us: hello@listmeapp.co',
  },
  {
    icon: 'fas fa-phone',
    title: 'WhatsApp: +442080401901',
  },
];

const ContactUs = () => {
  return (
    <Section>
      <div className="container">
        <div className="columns is-centered mb-6">
          <div className="column is-half is-offset-is-three-quarters has-text-centered">
            <Heading title="Get in Touch" />
            <h1 className="title smallText has-text-weight-normal is-size-6 mb-5 mt-6">
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
                  <h1 className="title is-6 has-text-weight-normal">
                    {item.title}
                  </h1>
                </div>
              </div>
            ))}
            <PurpleButton
              title="Book A Demo"
              className="is-medium has-text-weight-semibold mb-6 mt-5 btn"
            />
            <h1 className="title is-4 has-text-weight-bold has-text-left">
              Drop Us a Line
            </h1>
            <input className="input is-medium" placeholder="Your Name *" />
            <input className="input is-medium" placeholder="Your Email *" />
            <textarea className="textarea is-medium" placeholder="Message" />
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
