import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  .greenColor {
    color: ${theme.hoverColor} !important;
    font-size: 3.5rem;
  }
  .subs {
    line-height: 2rem;
    font-family: ${theme.secondaryFontFamily};
    font-weight: inherit;
  }
  button {
    border-radius: 100px;
    width: 12rem;
    height: 3.5rem;
    font-weight: bold;
    background-color: transparent;
  }
  .appStore {
    color: ${theme.backgroundColor};
    font-family: ${theme.primaryFontFamily};
    font-weight: initial;
    box-shadow: 0px 9px 30px 0 rgba(106, 75, 196, 0.4) !important;
    :hover {
      background-color: ${theme.backgroundColor} !important;
      color: ${theme.textColor} !important;
      border-color: ${theme.darkAccent};
      .appleIcon {
        color: ${theme.darkAccent};
      }
    }
  }
  .is-1 {
    font-size: 4rem !important;
    margin-bottom: 2rem;
  }
  .appStoreBack {
    margin: 1.5rem 0.5rem;
    display: inline-block;
    background-image: radial-gradient(
      circle farthest-corner at 100% 150%,
      #d75dbc 10%,
      #6a4bc4 50%
    );
    border-radius: 100px;
  }
  .playStore {
    font-family: ${theme.primaryFontFamily};
    font-weight: initial;
    border-color: ${theme.darkAccent};
  }
  .playStoreBack {
    margin: 0.5rem 1rem;
    display: inline-block;
    border-radius: 100px;
    transition: 1s;
    :hover {
      background-image: radial-gradient(
        circle farthest-corner at 100% 150%,
        #d75dbc 10%,
        #6a4bc4 50%
      );
      button {
        color: ${theme.backgroundColor};
        box-shadow: 0px 9px 30px 0 rgba(106, 75, 196, 0.4) !important;
      }
      .playIcon {
        color: ${theme.backgroundColor};
      }
    }
  }
  .playIcon {
    margin-right: 10px;
    color: ${theme.darkAccent};
  }
  .appleIcon {
    margin-right: 10px;
  }
`;

const DownloadApp = () => {
  return (
    <Container>
      <section className="section has-text-centered">
        <h1 className="title is-1 has-text-weight-bold has-text-black">
          Download App <span className="greenColor">{`</>`}</span>
        </h1>
        <div className="columns is-centered">
          <div className="column is-8">
            <h1 className="title is-5 has-text-grey-lighter subs">
              Are you looking for trusted experts, who are ready to get insight
              about your business needs? Here we are with our comprehensive
              services!
            </h1>
          </div>
        </div>
        <div className="appStoreBack">
          <button type="button" className="button is-medium appStore">
            <i className="fab fa-apple is-size-4 appleIcon" />
            App Store
          </button>
        </div>
        <div className="playStoreBack">
          <button type="button" className="button is-medium playStore">
            <i className="fab fa-google-play is-size-4 playIcon" />
            Google Play
          </button>
        </div>
      </section>
    </Container>
  );
};
export default DownloadApp;
