import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 120px;
  height: 5px;
  background-color: rgba(255,255,255,0.15);
`;

export const FilledBar = styled.div`
  height: 100%;
  width: ${props => props.percentage}%;
  background-color: white;
  background-color: rgba(255,255,255,0.7);
`;

const HorizontalBar = ({ percentage }) => (
  <Wrapper>
    <FilledBar percentage={percentage} />
  </Wrapper>
);

export default HorizontalBar;
