import React from 'react';
import styled from 'styled-components';

import { theme } from '../../utils/theme';

const Container = styled.div`
  span {
    color: ${theme.textColorLite} !important;
  }
  .column {
    transition: 1s;
    margin-left: -2rem;
    :hover {
      background-color: ${theme.hoverColor};
      border-bottom-right-radius: 100px;
      border-top-right-radius: 100px;
    }
  }
`;
const Icon = [
  { icon: 'fab fa-twitter' },
  { icon: 'fab fa-twitter' },
  { icon: 'fab fa-twitter' },
  { icon: 'fab fa-twitter' },
];

const SocialIcons = () => {
  return (
    <Container className="columns is-multiline has-text-centered">
      {Icon.map(item => (
        <div className="column is-12">
          <span>
            <i className={item.icon} />
          </span>
        </div>
      ))}
    </Container>
  );
};
export default SocialIcons;
