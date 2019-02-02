import React from 'react';
import styled from 'styled-components';
import filesize from 'filesize';

const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #23303A;
  padding: 30px;
  margin-bottom: 5vw;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 5px;
  text-transform: uppercase;
`;

const GrandTotal = styled.span`
  font-size: 14px;
  letter-spacing: 1px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Header = ({ title, grandTotal }) => (
  <HeaderBar>
    <Title>{title || 'Sizemometer'}</Title>
    <GrandTotal>
      All files:
      {' '}
      <Bold>{filesize(grandTotal)}</Bold>
    </GrandTotal>
  </HeaderBar>
);

export default Header;
