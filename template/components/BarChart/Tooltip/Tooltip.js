import React from 'react';
import { TooltipWrapper, Label, Value } from '../styled';

const Tooltip = ({data, children}) => {
  return (
    <TooltipWrapper>
      {data && data.map(datum => (
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