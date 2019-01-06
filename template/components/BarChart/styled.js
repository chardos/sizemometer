import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background-color: #eaeaea;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  align-items: flex-end;
`

export const Bar = styled.div`
  background-color: #b7b7b7;
  width: 30px;
  height: ${props => props.percentage}%;
`