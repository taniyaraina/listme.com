import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.ul`
  justify-content: flex-start;
  width: 35px;
  li {
    transition: 0.5s;
    justify-content: center;
    display: flex;
    :hover {
      padding: 10px;
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
    <Container>
      {Icon.map(item => (
        <a>
          <li className="mb-5">
            <span className="has-text-grey-light">
              <i className={item.icon} />
            </span>
          </li>
        </a>
      ))}
    </Container>
  );
};
export default SocialIcons;
