import React from 'react';
import styled from 'styled-components';
import { TooltipWrapper } from '../Tooltip/Tooltip';

const Bar = styled.div`
  border-radius: 5px;
  width: 10px;
  background-color: #6D8294;
  height: 100%;
  transition: 0.2s all;
`

const BarWrapper = styled.div`
  cursor: pointer;
  position: relative;
  padding: 0 20px;
  height: ${props => props.height};
  opacity: ${props => props.opacity};
  pointer-events: ${props => props.pointerEvents};

  &:hover ${Bar} {
    background-color: ${props => props.theme.accentColor || '#FFD067'};
  }

  &:hover ${TooltipWrapper} {
    opacity: 1;
    transform: translate(-50%, -0);
  }
`

export default ({ children, percentage, isEmpty }) => {
  const styleProps = {
    height: isEmpty ? '10px' : `${percentage}%`,
    opacity: isEmpty ? 0.5 : 1,
    pointerEvents: isEmpty ? 'none' : 'auto'
  }

  return (
    <BarWrapper {...styleProps}>
      <Bar>{children}</Bar>
    </BarWrapper>
  )
}