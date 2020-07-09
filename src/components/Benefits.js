import React, { useState } from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';
import BenefitsList from './BenefitsList';

const Container = styled.div`
  align-content: right;
  .lightGreen {
    color: ${theme.hoverColor} !important;
  }
  .section {
    padding-top: 0rem;
  }
  .buttonBorder {
    border: 1px solid ${theme.textColorLite};
    display: inline-block;
    border-radius: 100px;
    padding: 2px 2px;
    button {
      border-radius: 100px;
      width: 10rem;
      border-width: 0px;
    }
  }
`;

const Map = styled.div``;

const Benefits = () => {
  const [selected, setSelected] = useState(true);
  return (
    <Container className="columns is-multiline is-gapless">
      <div className="column is-2" />
      <div className="column is-4">
        <section className="section">
          <h1 className="title is-6 lightGreen">{`< app_benefits >`}</h1>
          <h1 className="title is-2 has-text-weight-bold">
            Shop with App Across the Globe
          </h1>
          <BenefitsList
            selected={selected}
            onTrue={() => setSelected(true)}
            onFalse={() => setSelected(false)}
          />
        </section>
      </div>
      <div className="column">
        <Map className="">
          <img src="/images/contact/map.png" alt="" />
        </Map>
      </div>
    </Container>
  );
};
export default Benefits;
