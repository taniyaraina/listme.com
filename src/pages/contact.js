import React from 'react';
import styled from 'styled-components';

import ContactUs from '../components/ContactUs';
import Seo from '../components/Seo';
import Layout from '../components/Layout';

const Wrapper = styled.div`
    background-image: url(/images/contact/l.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center bottom;
    height: 378px;
    margin-bottom: 40px;
    padding-top: 60px;
    padding-bottom: 145px;
}
`;

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
    <Wrapper className="section hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-2 has-text-weight-bold">Contacts</h1>
        </div>
      </div>
    </Wrapper>
    <Section className="section">
      <ContactUs />
    </Section>
  </Layout>
);

export default Contact;
