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
  position: relative;
  margin-left: 10px;
  padding: 0 20px;
  height: ${props => props.percentage}%;

  &:hover ${Bar} {
    background-color: #FFD067;
  }

  &:hover ${TooltipWrapper} {
    opacity: 1;
    transform: translate(-50%, -0);
  }
`

export default ({ percentage, children }) => {
  return (
    <BarWrapper percentage={percentage}>
      <Bar>{children}</Bar>
    </BarWrapper>
  )

}