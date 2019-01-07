import styled from 'styled-components';

export const Graph = styled.div`
  display: flex;
  background-color: #eaeaea;
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
  background-color: #676767;
  color: #dadada;
  z-index: 1;

  font-family: sans-serif;
  font-size: 12px;
`

export const Bar = styled.div`
  position: relative;
  background-color: #b7b7b7;
  margin-left: 30px;
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



