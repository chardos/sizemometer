import React from 'react';
import styled from 'styled-components';
import { Label, Value } from '../styled';

export const TooltipWrapper = styled.div`
  pointer-events: none;
  text-align: center;
  opacity: 0;
  position: absolute;
  top: -70px;
  left: 50%;
  transform: translate(-50%, 4px);
  width: 90px;
  padding: 12px 8px;
  border-radius: 10px;
  background-color: rgba(33,47,58,0.9);
  color: #dadada;
  z-index: 1;
  font-size: 12px;
  transition: 0.2s all;

  &:after {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: transparent;
    border-top-color: rgba(33,47,58,0.9);
    border-width: 8px;
    margin-left: -8px;
  }
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