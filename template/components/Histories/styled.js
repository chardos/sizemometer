import styled from 'styled-components';

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



// Tool tip
export const Size = styled.div`
  font-size: 24px;
`

export const Data = styled.div`
  font-size: 14px;
`