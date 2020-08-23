import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
margin-top: 5rem;
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
    box-shadow: 0px 9px 30px 0 rgba(157,43,126,0.4)!important;
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
      #9d2b7e 50%
    );
    border-radius: 100px;
  }
      button {
        color: ${theme.backgroundColor};
        box-shadow: 0px 9px 30px 0 rgba(106, 75, 196, 0.4) !important;
      }
    }
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
          Download App
        </h1>
        <div className="columns is-centered">
          <div className="column is-7">
            <h1 className="title is-5 has-text-grey-lighter subs">
              Are you looking for a stress free nightlife experience? If so this
              is the application for you!
            </h1>
          </div>
        </div>
        <div className="appStoreBack">
          <button type="button" className="button is-medium appStore">
            <i className="fab fa-apple is-size-4 appleIcon" />
            App Store
          </button>
        </div>
      </section>
    </Container>
  );
};
export default DownloadApp;
