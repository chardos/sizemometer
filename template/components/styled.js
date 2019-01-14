import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    background-color: #1A262F;
  }
`


export const Card = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.05);
`

export const GraphCard = styled(Card)`
  margin-bottom: 20px;
`

export const ChartWrapper = styled.div`
  padding: 20px;
`

export const Filename = styled.div`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 20px 30px;
  border-bottom: 1px solid #eee;
`

