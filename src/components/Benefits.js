import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  align-content: right;
  display: flex;
  .lightGreen {
    color: ${theme.hoverColor} !important;
  }
`;

const Benefits = () => {
  return (
    <Container className="columns is-gapless has-text-left">
      <div className="column is-3" />
      <div className="column is-3">
        <h1 className="title is-6 lightGreen">{`< app_benefits >`}</h1>
        <h1 className="title is-2 has-text-weight-bold">
          Shop with App Across the Globe
        </h1>
      </div>
    </Container>
  );
};
export default Benefits;
