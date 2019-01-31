import styled from 'styled-components';

export const DetailModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #1A262F;
  padding: 30px;
  overflow: scroll;
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 30px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  div {
    padding: 20px 5px 20px 0;
    border-top: 1px solid #324350;
  }
`
