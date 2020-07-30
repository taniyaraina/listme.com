import React from 'react';
import styled from 'styled-components';

const Heading = ({ subtitle, title }) => (
  <div>
    <h1 className="title is-5 has-text-weight-medium has-text-primary">
      {subtitle}
    </h1>
    <h1 className="title is-3 has-text-weight-bold has-text-black">{title}</h1>
  </div>
);
export default Heading;
