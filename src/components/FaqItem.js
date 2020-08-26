import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem !important;
  border: 1px solid #e7e8e8;
  margin-bottom: 2rem;
  border-radius: 2rem;
  font-family: ${props => props.theme.primaryFontFamily};
  box-shadow: none !important;
  :hover {
    background: radial-gradient(
      circle farthest-corner at 100% 150%,
      #68044d 10%,
      #9d2b7e 50%
    );
    color: #ffff;
    a {
      color: #fff;
    }
  }
  a {
    font-size: 2rem;
  }
`;

const AnswerContainer = styled.div`
  padding: 0rem 0rem 1.3rem 1.2rem;
  p {
    line-height: 2;
  }
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
      <>
        <Container className="" type="button" onClick={this.toggleDiv}>
          <h1 className="is-size-6">{questions} </h1>
          <a>{show ? '-' : '+'}</a>
        </Container>
        {show && (
          <AnswerContainer>
            <p>{answer}</p>
          </AnswerContainer>
        )}
      </>
    );
  }
}

export default FaqItem;
