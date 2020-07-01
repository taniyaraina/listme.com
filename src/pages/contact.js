import React from 'react';
import styled from 'styled-components';

import ContactComponent from '../components/ContactComponent';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';

const Section = styled.div`
  .container {
    margin-top: 4rem;
  }
  p {
    margin-bottom: 1rem;
  }
  .image {
    width: 500px;
    height: auto;
    margin: 0 auto;
    object-position: center;
  }
  .button {
    margin-top: 2rem;
  }
`;

const Contact = () => (
  <Layout>
    <Seo title="Contact Us" />
    <Section className="section">
      <ContactComponent />
    </Section>
  </Layout>
);

export default Contact;
