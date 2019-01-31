import React from "react";
import * as styled from './styled';
import { connect } from 'react-redux';
import filesize from 'filesize';

const DetailModal = ({detailModal, histories}) => {
  if (!detailModal.isOpen) return null;

  const history = histories.find((hist) => hist.filename === detailModal.filename)

  console.log('history', history);

  return (
    <styled.DetailModalWrapper>
      <styled.Title>{history.filename}</styled.Title>
      
      <styled.Grid>
        <styled.GridTitle>Author</styled.GridTitle>
        <styled.GridTitle>Commit hash</styled.GridTitle>
        <styled.GridTitle>Commit message</styled.GridTitle>
        <styled.GridTitle>Size</styled.GridTitle>

        {history.data.bars.map(({tooltip}) => (
          <React.Fragment key={tooltip.commitHash}>
            <styled.GridItem>{tooltip.author}</styled.GridItem>
            <styled.GridItem>{tooltip.commitHash}</styled.GridItem>
            <styled.GridItem>{tooltip.commitMessage}</styled.GridItem>
            <styled.GridItem>{filesize(tooltip.size)}</styled.GridItem>
          </React.Fragment>
        ))}
      </styled.Grid>
    </styled.DetailModalWrapper>
  );
};

export default connect(({detailModal, histories}) => ({
  detailModal, histories
}))(DetailModal);
