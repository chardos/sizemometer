import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background-color: red;
  width: 500px;
  height: 100px;
  align-items: flex-end;
`

export const Bar = styled.div`
  background-color: green;
  width: 30px;
  height: ${props => props.percentage}px;
`