import styled from "styled-components";

export const InputPage = styled.input`
  font-size: 14px;

  width: 80%;
  margin-top: -5px;
  margin-left: 32px;
  margin-bottom: 25px;
  padding: 15px;

  color: ${({theme}) => theme.colors.contrastText};

  border: 1px solid ${({theme}) => theme.colors.primary};
  border-radius: ${({theme}) => theme.borderRadius};
  background: ${({theme}) => theme.colors.mainBg};

  outline: 0;
`;
