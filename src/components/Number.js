import React from 'react';

import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import styled from 'styled-components';
import Image from '../../static/images/NumberBackground.jpg';
import { theme } from '../utils/theme';

const Container = styled.div`
  .background {
    background: url(${Image});
    background-size: cover;
    min-height: 15rem;
    border-radius: 50px;
    background-repeat: no-repeat;
    padding: 5rem;
  }
  .title {
    color: ${theme.backgroundColor} !important;
    font-weight: bold;
  }
  .subtitle {
    color: ${theme.backgroundColor} !important;
    font-weight: normal;
  }
`;

const Numbers = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  return (
    <Container inView={inView}>
      <section className="section" ref={ref}>
        <div className="columns is-centered is-vcentered">
          <div className="column is-10  background">
            <div className="columns is-centered is-vcentered has-text-centered">
              <div className="column is-3">
                <h1 className="title is-3">
                  <CountUp
                    start={0}
                    end={190}
                    duration={2.75}
                    decimals={1}
                    decimal=""
                  />
                </h1>
                <h1 className="subtitle is-5">{`< happy_clients >`}</h1>
              </div>
              <div className="column is-3">
                <h1 className="title is-3">
                  <CountUp
                    start={0}
                    end={190}
                    duration={4.75}
                    decimals={1}
                    decimal=""
                  />
                </h1>
                <h1 className="subtitle is-5">{`< lines_of_code >`}</h1>
              </div>
              <div className="column is-3">
                <h1 className="title is-3">
                  <CountUp
                    start={0}
                    end={190}
                    duration={4.75}
                    decimals={1}
                    decimal=""
                  />
                </h1>
                <h1 className="subtitle is-5">{`< great_features >`}</h1>
              </div>
              <div className="column is-3">
                <h1 className="title is-3">
                  <CountUp
                    start={0}
                    end={500}
                    duration={4.75}
                    decimals={1}
                    decimal=""
                  />
                </h1>
                <h1 className="subtitle is-5">{`< maga_block >`}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};
export default Numbers;
