import React from 'react';
import styled from 'styled-components';

import ContactUs from '../components/ContactUs';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import MapHero from '../components/MapHero';

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
    <MapHero Title="Contact" />
    <Section className="section">
      <ContactUs />
    </Section>
  </Layout>
);

export default Contact;
