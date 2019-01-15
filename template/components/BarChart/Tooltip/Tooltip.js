import React from 'react';
import styled from 'styled-components';
import { Label, Value } from '../styled';

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

const Tooltip = ({data, children}) => {
  return (
    <TooltipWrapper>
      {!children && data && data.map(datum => (
        <div>
          <Label>{datum.label}</Label>
          <Value>{datum.value}</Value>
        </div>
      ))}
      {children}
    </TooltipWrapper>
  )
}

export default Tooltip;