import styled from 'styled-components';

export const Graph = styled.div`
  display: flex;
  width: ${props => props.width};
  height: ${props => props.height};
  align-items: flex-end;
  justify-content: space-between;
`;

export const TransparentDot = styled.div`
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 5px;
`;

export const Label = styled.div`
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Value = styled.div`
  font-size: 14px;
`;