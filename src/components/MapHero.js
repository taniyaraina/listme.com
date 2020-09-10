import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { useSpring, animated } from 'react-spring';

import { theme } from '../utils/theme';

const Container = styled.div`
  .card1 {
    position: absolute;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    will-change: transform;
  }

  .card1 {
    width: 100%;
    height: 100%;
    background-image: url('/images/business-logo.png');
  }

  .script-box {
    will-change: width, height, left, top;
    position: relative;
  }
`;

const Section = styled.div``;

const Wrapper = styled.div`
  display: inline-flex;
`;

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 25}px,${y / 25}px,0)`;
// const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
// const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
// const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

const MapHero = ({ Title, lightSubtitle, subtitle }) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <Container
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        class="card1"
        style={{ transform: props.xy.interpolate(trans1) }}
      />

      <Section className="section hero">
        <div className="hero-body has-text-centered">
          <div className="container ">
            <Fade top>
              <h1 className="title is-2 has-text-weight-bold has-text-white">
                {Title}
              </h1>
              <Wrapper>
                <span className="icon">
                  <i className="fas fa-home" />
                </span>
                <h1 className="title is-size-6  has-text-weight-light has-text-white">
                  <span className="grey">{lightSubtitle}</span> {subtitle}
                </h1>
              </Wrapper>
            </Fade>
          </div>
        </div>
      </Section>
    </Container>
  );
};
export default MapHero;
