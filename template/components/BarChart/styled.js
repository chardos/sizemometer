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
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  background-color: red;
  z-index: 1;

  font-family: sans-serif;
  font-size: 12px;
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
export const Label = styled.div`
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
`
export const Value = styled.div`
  
`

// word-wrap: break-word;
