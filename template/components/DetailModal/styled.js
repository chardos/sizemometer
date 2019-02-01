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

export const CloseButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20px;
  right: 20px;
  width: 45px;
  height: 45px;
  cursor: pointer;
  opacity: 0.8;
  border-radius: 4px;
  transition: 0.15s all;
  border: 1px solid rgba(255,255,255,0);

  &:hover {
    border: 1px solid rgba(255,255,255,0.3);
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

export const GridTitle = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 12px;
  margin-bottom: 20px;
  color: rgba(255,255,255, 0.8);
`;

export const GridItem = styled.div `
  padding: 20px 10px 20px 0;
  border-top: 1px solid #324350;
  font-size: 14px;
  color: rgba(255,255,255, 0.8);
`

export const HighlightedGridItem = styled(GridItem)`
  color: white;
  font-weight: bold;
`