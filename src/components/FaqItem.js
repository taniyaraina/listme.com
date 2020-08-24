import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
.level-right {
  font-size: 2rem;
  color:${props => props.theme.mainBrandColor};
}
  .button,
  .Icon {
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
    }
  }

  .button {
    :hover {
     .level-right {
     color: #fff;
     }
      );
  }
  /* .Icon {
    color: ${props => props.theme.mainBrandColor};
    :hover {
      color: #ffff;
    }
  } */
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
      <Container>
        <button
          className="button is-medium is-fullwidth level"
          type="button"
          onClick={this.toggleDiv}
        >
          <div className="level-left">
            <h1 className="is-size-6">{questions} </h1>
          </div>
          <a className="level-right">{show ? '-' : '+'}</a>
        </button>
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
