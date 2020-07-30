import React from 'react';
import styled from 'styled-components';
import Heading from './elements/Heading';
import FeatureInfo from '../components/FeatureInfo';

const Container = styled.div``;

const Features = () => {
  return (
    <Container>
      <section class="section">
        <div class="container">
          <div className="columns is-multiline  is-vcentered is-centered has-text-centered">
            <div className="column is-12">
              <div className="columns is-centered">
                <div className="column is-5">
                  <Heading
                    subtitle={`< how_it_works >`}
                    title="Get Started in a Few Minutes with WallApp"
                  />
                </div>
              </div>
            </div>
            <div className="column is-6">
              <img src="/images/iphone-1.png" alt="iphone" />
            </div>
            <div className="column is-6">
              <FeatureInfo
                icon=" fas fa-mobile-alt"
                title="Choose Store"
                subtitle="Payment processing was our first contribution to the Bitcoin ecosystem, but it is not our last."
              />
              <FeatureInfo
                icon="fas fa-redo"
                title="Download App"
                subtitle="Payment processing was our first contribution to the Bitcoin ecosystem, but it is not our last."
              />
              <FeatureInfo
                icon="fab fa-btc"
                title="Enjoy Software"
                subtitle="Payment processing was our first contribution to the Bitcoin ecosystem, but it is not our last."
              />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};
export default Features;
