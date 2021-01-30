import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;

  margin: auto 10%;
    
  .success {
    font-size: 22px;
    font-weight: 700;

    img {
      margin-top: 22px;
      width: 100%;
      height: 220px;
    }
  }

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default QuizContainer;