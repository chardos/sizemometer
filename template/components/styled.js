import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
  }
`


export const Card = styled.div`
  border-radius: 4px;
  box-shadow: 0px 3px 10px rgba(0,0,0,0.15);
`

// Tool tip
export const Size = styled.div`
  font-size: 24px;
`

export const Data = styled.div`
  font-size: 14px;
`