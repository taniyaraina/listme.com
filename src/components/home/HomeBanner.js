import React from 'react';
import styled from 'styled-components';

import { Heading } from '../atoms';

const Container = styled.div`
  .bg-image {
    background-image: url(/images/home-banner.png);
  }
`;

const HomeBanner = () => (
  <Container>
    <div className="w-full bg-center bg-cover bg-image h-screen">
      <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
        <div className="text-left pl-32">
          <Heading className="text-white"> Events Made Simple</Heading>
          <p>
            A safe & secure social networking platform. We help brands & venues
            in the hospitality industry put the consumer first with a full
            digital events management solution.
          </p>
          <p>No paper ID, no paper clipboard & no in house ID machine needed</p>
          <button
            type="button"
            className="w-full px-4 py-2 mt-4 ml-5 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
          >
            Start project
          </button>
        </div>
      </div>
    </div>
  </Container>
);

export default HomeBanner;
