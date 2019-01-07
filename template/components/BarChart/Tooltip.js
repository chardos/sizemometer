import React from 'react';
import { TooltipWrapper, Label, Value } from './styled';

const Tooltip = ({data}) => {
  return (
    <TooltipWrapper>
      {data.map(datum => (
        <div>
          <Label>{datum.label}</Label>
          <Value>{datum.value}</Value>
        </div>
      ))}
    </TooltipWrapper>
  )
}

export default Tooltip;