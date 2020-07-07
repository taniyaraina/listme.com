import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  justify-content: flex-start;
  span {
    color: ${theme.textColorLite} !important;
  }
  .column {
    transition: 0.5s;
    margin-left: -2.4rem;
    :hover {
      background-color: ${theme.hoverColor};
      border-bottom-right-radius: 100px;
      border-top-right-radius: 100px;
    }
  }
`;
const Icon = [
  { icon: 'fab fa-twitter' },
  { icon: 'fab fa-facebook-f' },
  { icon: 'fab fa-google' },
  { icon: 'fab fa-linkedin-in' },
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
