import styled from 'styled-components';

export const Graph = styled.div`
  display: flex;
  background-color: #eaeaea;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  align-items: flex-end;
`

export const TooltipWrapper = styled.div`
  display: none;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 80px;
  height: 40px;
  background-color: red;
  z-index: 1;
`

export const Bar = styled.div`
  position: relative;
  background-color: #b7b7b7;
  width: 30px;
  height: ${props => props.percentage}%;

  &:hover ${TooltipWrapper} {
    display: block;
  }
`

