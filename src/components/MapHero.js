import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { useSpring, animated } from 'react-spring';

const Container = styled.div`
  .card1 {
    position: absolute;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    will-change: transform;
  }
  .head {
    color: #54e0c4 !important;
    font-size: 18px !important;
    line-height: 2;
  }
  .mainHead {
    font-size: 55px !important;
  }
  .Subtitle {
    line-height: 1.7 !important;
  }
  .phoneImage {
    position: absolute;
    left: 56%;
    top: 70%;
  }
  .PhoneImageSecond {
    position: absolute;
    left: 90%;
    top: 60%;
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
const trans2 = (x, y) => `translate3d(${x / 8 + 15}px,${y / 8 - 200}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
// const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

const MapHero = ({ Title, heading, lightSubtitle, subtitle }) => {
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
      <animated.img
        class="phoneImage"
        src="/images/upcoming-event.png"
        alt="phone"
        style={{ transform: props.xy.interpolate(trans2) }}
      />
      <animated.img
        src="/images/Event-Image2.png"
        alt="phoneImage2"
        class="PhoneImageSecond"
        style={{ transform: props.xy.interpolate(trans3) }}
      />

      <Section className="section hero">
        <div className="hero-body has-text-centered">
          <div className="container ">
            <div className="columns is-mobile ">
              <div className="column is-three-fifths is-offset-one-fifth mt-6">
                <Fade top>
                  <h1 className="title is-size-5 has-text-weight-bold head mb-0">
                    {heading}
                  </h1>
                  <h1 className="title has-text-weight-bold has-text-white mb-0 mainHead">
                    {Title}
                  </h1>
                  <Wrapper>
                    <h1 className="Subtitle title is-size-5 has-text-weight-bold has-text-white">
                      {subtitle}
                    </h1>
                  </Wrapper>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
};
export default MapHero;
