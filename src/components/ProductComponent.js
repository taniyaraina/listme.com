/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';
import MapHero from './MapHero';

const Container = styled.div`
  .bordered {
    border: 1px solid ${theme.borderColor};
    border-radius: 10px;
  }
  .section {
    padding: 1rem;
    img {
      margin-top: -3rem;
    }
    svg {
      z-index: 2 !important;
      margin-top: 2rem;
    }
  }
  .purple {
    color: ${theme.darkAccent} !important;
  }

  .column .is-6 {
    font-size: 0.9rem;
    line-height: 1.4rem;
  }
  .borderTopAndBottom {
    border: 0px solid ${theme.textColorLite};
    border-top-width: 1px;
    border-bottom-width: 1px;

    .subtitle {
      line-height: 0.8rem;
    }
  }
  .has-background-light {
    display: inline-block;
    border-radius: 100px;
  }
  .card {
    padding-top: 2rem;
    box-shadow: none;
    flex-direction: row;
  }
`;

const ProductComponent = () => {
  const [ProductNo, _setProductNo] = React.useState(1);
  function DecreaseProduct() {
    if (ProductNo > 1) {
      _setProductNo(ProductNo - 1);
    }
  }
  function IncreaseProduct() {
    _setProductNo(ProductNo + 1);
  }
  return (
    <Container>
      <MapHero
        Title="Shop"
        lightSubtitle="Business "
        subtitle="> Top 10 App Tips"
      />
      <div className="columns is-centered">
        <div className="column is-10">
          <div className="columns is-centered">
            <div className="column is-6">
              <section className="section bordered has-text-right">
                <span className="icon SearchIcon is-size-4 ">
                  <i className="fas fa-search" />
                </span>
                <img src="/images/purpleBook.jpg" alt="book" />
              </section>
            </div>
            <div className="column is-6">
              <h1 className="title is-3 has-text-weight-bold">
                Top 10 App Tips
              </h1>
              <h1 className="title is-4 has-text-weight-bold">
                <span className="purple">$18.00</span>
              </h1>
              <h1 className="title is-6 has-text-weight-light">
                We are a team of young, experienced developers who are
                passionate about their work. Years of cooperation with both
                corporations and startups, helped us to build diverse portfolio
                of interesting projects.
              </h1>
              <div className="content">
                <ul>
                  <li>Digital project planning and resourcing</li>
                  <li>In-House digital consulting</li>
                  <li>Developers and technical architects</li>
                </ul>
              </div>
              <div className="borderTopAndBottom py-4">
                <h1 className="subtitle is-6 has-text-weight-light">
                  <span className="has-text-weight-bold">SKU:</span>{' '}
                  Woo-tshirt-logo
                </h1>
                <h1 className="subtitle is-6 has-text-weight-light">
                  <span className="has-text-weight-bold">Categories:</span>{' '}
                  Apps, business
                </h1>
                <h1 className="subtitle is-6 has-text-weight-light">
                  <span className="has-text-weight-bold">Tags:</span> analysis,
                  app
                </h1>
              </div>
              <div className="card columns mt-4">
                <h1 className="title is-5 has-background-light py-3 mr-6">
                  <span
                    className="icon mx-4 is-size-6"
                    onClick={() => DecreaseProduct()}
                  >
                    <i className="fas fa-minus" />
                  </span>
                  {ProductNo}
                  <span
                    className="icon  mx-4 is-size-6"
                    onClick={() => IncreaseProduct()}
                  >
                    <i className="fas fa-plus" />
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default ProductComponent;
