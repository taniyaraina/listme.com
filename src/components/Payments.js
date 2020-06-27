import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  .side {
    margin-left: -10rem;
  }
  .card {
    border-radius: 50px;
    box-shadow: 0px 15px 38px rgba(0, 0, 0, 0.1);
  }
  .purple {
    color: ${theme.darkAccent} !important;
  }
  .lightGreen {
    color: ${theme.hoverColor} !important;
  }
  .small {
    font-size: 0.9rem;
    line-height: 1.2rem;
  }
  .boldText {
    font-weight: bold;
  }
  img {
    border-radius: 100px;
  }
  .paddingTop {
    padding-top: 1rem;
  }
  .cancelTopPadding {
    padding-top: 0rem;
  }
  }
  .imageHide {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .secondCard{
    @media screen and (max-width: 768px) {
      padding-top:0rem;
    }
  }
  .icon{
    padding-top:1rem;
    padding-bottom:2rem;
    color:${theme.hoverColor} !important;
  }
`;

const Payments = () => {
  return (
    <Container className="columns is-multiline has-text-centered">
      <div className="column is-3 side imageHide">
        <img src="images/letter-a.png" alt="a" />
      </div>
      <div className="column is-3  ">
        <section className="section cancelTopPadding">
          <div className="card">
            <section className="section ">
              <span className="icon  is-size-2">
                <i className="fab fa-bitcoin" />
              </span>
              <h1 className="subtitle is-4 has-text-weight-bold">
                Any Payments
              </h1>
              <h1 className="subtitle is-5 has-text-grey-lighter">
                Accept Crypto payments from your online customers on your
                smartphone.
              </h1>
              <h1 className="purple">{`< Read More >`}</h1>
            </section>
          </div>
        </section>
      </div>
      <div className="column is-3  ">
        <section className="section secondCard">
          <div className="card">
            <section className="section">
              <span className="icon is-size-2">
                <i className="fab fa-bitcoin" />
              </span>
              <h1 className="subtitle is-4 has-text-weight-bold">
                Any Payments
              </h1>
              <h1 className="subtitle is-5 has-text-grey-lighter">
                Crypto Payments are faster, cheaper and guarantee no
                chargebacks.
              </h1>
              <h1 className="lightGreen">{`< Read More >`}</h1>
            </section>
          </div>
        </section>
      </div>
      <div className="column is-4 has-text-left ">
        <section className="section">
          <h1 className="title is-6 lightGreen">{`< about_app >`}</h1>
          <h1 className="title is-3 has-text-weight-bold">
            Get Started with Crypto Payments
          </h1>
          <h1 className="title small has-text-weight-normal">
            We have created a few plugins for the most popular shopping carts to
            make integrations fast and easy, even for a non-technical user.
            <span className="boldText">
              {' '}
              Get start accepting Crypto Payments today!
            </span>
          </h1>
          <h1 className="purple">{`< Read More >`}</h1>
          <div className="columns is-mobile paddingTop is-vcentered">
            <div className="column is-3">
              <img src="images/girl.jpg" alt="girl" />
            </div>
            <div className="column">
              <h1 className="title is-6 has-text-weight-bold">
                Jina Nilson,<span className="purple">UI Designer</span>
              </h1>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};
export default Payments;
