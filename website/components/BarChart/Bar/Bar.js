import React from 'react';
import styled from 'styled-components';
import { TooltipWrapper } from '../Tooltip/Tooltip';

const BarInner = styled.div`
  position: relative;
  border-radius: 5px;
  width: 10px;
  background-color: #6D8294;
  height: ${props => props.height};
  transition: 0.2s background-color;
`;

const BarWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  padding: 0 20px;
  height: 100%;
  opacity: ${props => props.opacity};
  pointer-events: ${props => props.pointerEvents};

  &:hover ${BarInner} {
    background-color: ${props => props.theme.accentColor || '#FFD067'};
  }

  &:hover ${TooltipWrapper} {
    opacity: 1;
    transform: translate(-50%, -0);
  }
`;

const Bar = ({
  children, percentage, isEmpty, onBarClick, bar, filename,
}) => {
  const styleProps = {
    height: isEmpty ? '10px' : `${percentage}%`,
    opacity: isEmpty ? 0.5 : 1,
    pointerEvents: isEmpty ? 'none' : 'auto',
  };

  return (
    <BarWrapper {...styleProps} onClick={() => onBarClick(bar, filename)}>
      <BarInner {...styleProps}>{children}</BarInner>
    </BarWrapper>
  );
};

export default Bar;
