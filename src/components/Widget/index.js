import styled from 'styled-components';

const Widget = styled.div`
  margin-bottom: 22px;
  padding-bottom: 18px;

  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.mainBg};

  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
  }

  h2 {
    margin-bottom: ${props => props.quiz ? '12px' : '12px'}
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  padding: 18px 32px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary};  

  * { margin: 0 }
`;

Widget.Content = styled.div`
  padding: 16px 32px 20px 32px;

  ul { 
    list-style: none;

    li {
      text-align: center;
      margin-top: 4px;
      padding: 2px;

      border: none;
      border-radius: 20px;
      background: ${({ theme }) => theme.colors.primary};

      cursor: pointer;
      
      a {
        color: ${({ theme }) => theme.colors.contrastText};
        text-decoration: none;
      }
    }
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 16px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Widget;