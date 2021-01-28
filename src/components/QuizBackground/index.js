import styled from 'styled-components';
import db from '../../../db.json';

const QuizBackground = styled.div`
  width: 100%;
  background: url(${db.bg});
  background-size: cover;
  flex: 1;

  @media screen and (max-width: 500px) {
    &:after {
      content: "";
      background-size: cover;
      background-image: ${db.bg};
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;