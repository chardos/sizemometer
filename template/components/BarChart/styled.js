import styled from 'styled-components';

export const Graph = styled.div`
  display: flex;
  width: ${props => props.width};
  height: ${props => props.height};
  align-items: flex-end;
`

export const TooltipWrapper = styled.div`
  pointer-events: none;
  display: none;
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  padding: 8px;
  background-color: rgba(0,0,0,0.7);
  color: #dadada;
  z-index: 1;

  font-family: sans-serif;
  font-size: 12px;
`

export const Bar = styled.div`
  position: relative;
  border-radius: 4px 4px 0 0;
  background-color: #b7b7b7;
  margin-left: 10px;
  width: 20px;
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
  font-size: 14px;
`

