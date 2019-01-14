import React from 'react';
import styled from 'styled-components'

const HeaderBar = styled.div`
  background-color: #23303A;
  padding: 30px;
`;

const Title = styled.span`
  font-size: 18px;
  letter-spacing: 8px;
  text-transform: uppercase;
  color: white;
`;

const Header = (props) => (
  <HeaderBar>
    <Title>Sizemometer</Title>
  </HeaderBar>
);

export default Header;