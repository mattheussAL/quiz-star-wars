import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;

  padding: 20px;

  border-radius: 4px; 

  background-color: #00000070;

  img {
    width: 58px;
    margin-right: 23px;
  }

  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;