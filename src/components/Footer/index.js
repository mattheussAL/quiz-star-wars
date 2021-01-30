import React from 'react';
import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 12px;
  padding-bottom: 2px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  img { width: 58px;  margin-right: 23px; }

  p {
    @media (max-width: 500px) { visibility: hidden }
  }

  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    
    &:hover, &:focus {
      opacity: .5;
    }

    span { text-decoration: underline }

    @media (max-width: 500px) { visibility: hidden }
  }

  @media (max-width: 500px) {
    width: 1vw;
    height: 1vh;
    background: transparent;
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante
        {' '}
        a
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
