import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem 0rem;
  background: radial-gradient(
    circle farthest-corner at 100% 150%,
    #68044d 10%,
    #9d2b7e 50%
  );
  border-radius: 0rem;
  margin-bottom: 1rem;
  .Icon {
    width: 20.5px;
    height: 20.5px;
    margin: 0rem 2rem;
    @media only screen and (max-width: 600px) {
      margin: -38px 5px;
    }
    @media only screen and (max-device-width: 768px) {
      margin: -38px 5px;
    }
  }
  h1 {
    font-size: 18px;
  }
`;

const TitleWrapper = styled.div`
  margin: 4px 3rem;
`;

const AnswerContainer = styled.div`
  padding: 1rem 3rem;
`;

class FaqItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { show: false };
    this.toggleDiv = this.toggleDiv.bind(this);
  }

  toggleDiv = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  render() {
    const { questions, answer } = this.props;
    const { show } = this.state;

    return (
      <Container className="container">
        <div className="columns is-9">
          <div className="column is-four-fifths">
            <TitleWrapper>
              <h1 className="has-text-weight-medium has-text-white">
                {questions}
              </h1>
            </TitleWrapper>
          </div>
          <div className="column">
            <a onClick={this.toggleDiv}>
              <i className="Icon fas fa-plus is-pulled-right has-text-white" />
            </a>
          </div>
        </div>
        {show && (
          <AnswerContainer>
            <p>{answer}</p>
          </AnswerContainer>
        )}
      </Container>
    );
  }
}

export default FaqItem;
