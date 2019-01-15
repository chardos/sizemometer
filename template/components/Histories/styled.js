import styled from 'styled-components';

export const HistoriesWrapper = styled.div`
  padding: 20px;
  margin: 0 auto;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 20px;
`;

export const CardTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 0px 0px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 20px;
`

export const Card = styled.div`
  background-color: white;
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.05);
  background: linear-gradient(to bottom, #374451 0%, #313E48 100%);
`

export const ChartWrapper = styled.div`
  
`

// Tool tip
export const Size = styled.div`
  font-size: 24px;
`

export const Data = styled.div`
  font-size: 14px;
`