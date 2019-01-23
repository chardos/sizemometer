import React from 'react';
import styled from 'styled-components'

const HeaderBar = styled.div`
  background-color: #23303A;
  padding: 30px;
  margin-bottom: 5vw;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: white;
`;

const Header = (props) => (
  <HeaderBar>
    <Title>{props.title || 'Sizemometer'}</Title>
  </HeaderBar>
);

export default Header;