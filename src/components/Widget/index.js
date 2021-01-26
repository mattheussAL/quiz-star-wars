import styled from 'styled-components';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;

  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;

  background: #000a24e8;

  border-radius: 20px 20px 0 0 ;
  box-shadow: 0 0 100px #000a24e8;

  overflow: hidden;

  h1 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;

    margin-right: 9rem;
    margin-bottom: 0;
  }

  p { 
    font-size: .9rem;
    font-weight: 400;
    line-height: 1;
  }

  form {
    display: flex;
    flex-direction: column;

    margin-top: -2rem;
    padding: 2rem;
  }

  form input {
    padding: 12px;
    border: 1px solid rgba(255,255,255, .1);
    border-radius: .2rem;
    margin-bottom: 2rem;
    background: transparent;

    &::placeholder{
      color: rgba(255,255,255, .4);
    }
  }

  button {
    font-size: 1.2rem;
    font-weight: 700;
    color: #FFF;
    padding: .6rem;
    background: #ccc;
    border: none;
    border-radius: .2rem;

    transition: all .2s;

    cursor: pointer;

    &:hover {
      background: #c1c1c1;
    }
  } 
`;

Widget.Header = styled.header`
  * { margin: 0 };

  padding: 18px 32px;

  background: #33168bf8;

  display: flex;
  justify-content: center;
  align-items: center;
`;

Widget.Content = styled.div`
  padding: 12px 16px 16px 16px;

  ul {
    list-style: none;
     
    li {
      text-align: center;

      margin-bottom: 8px;
      padding: .2rem;

      border-radius: 2px;

      background: #33168bf8;

      cursor: pointer;
    }

    a {
      text-decoration: none;

      color: #F2F2F2;
    }
  }
  

  & > *::first-child { margin-top: 0 }
  & > *::last-child { margin-bottom: 0 }
`;
