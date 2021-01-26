import styled from 'styled-components';
import db from '../../../db.json';

const QuizBackground = styled.div`
  flex: 1;
  width: 100%;
  margin-top: -16px;
  background-size: cover;
  background-position: center;
  background-image: url(${db.bg});

  @media screen and (max-width: 500px) {
    position: absolute;

    width: 100%;
    height: 210px;
    top: 0;
    left: 0;
    right: 0;

    background-image: none;

    &:after {
      content: "";
      display: block;

      background-size: cover;
      background-position: center;
      background-image:
        linear-gradient(transparent, ${({ theme }) => theme.colors.primary}),
        url(${({ backgroundImage }) => backgroundImage});
     
      z-index: 1;
    }

    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;