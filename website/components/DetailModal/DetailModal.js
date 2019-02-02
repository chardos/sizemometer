import React from 'react';
import { connect } from 'react-redux';
import filesize from 'filesize';
import * as s from './styled';
import { closeModal } from '../../ducks/detailModal';

const DetailModal = ({ detailModal, histories, closeModal }) => {
  if (!detailModal.isOpen) return null;

  const history = histories.find((hist) => hist.filename === detailModal.filename);

  return (
    <s.DetailModalWrapper>
      <s.Title>{history.filename}</s.Title>
      <s.CloseButton onClick={closeModal}>X</s.CloseButton>

      <s.Grid>
        <s.GridTitle>Author</s.GridTitle>
        <s.GridTitle>Commit hash</s.GridTitle>
        <s.GridTitle>Commit message</s.GridTitle>
        <s.GridTitle>Size</s.GridTitle>
        {console.log('history.data', history.data)}

        {history.data.map(({
          commitHash, author, commitMessage, size,
        }) => {
          const GridItem = commitHash === detailModal.commitHash
            ? s.HighlightedGridItem
            : s.GridItem;

          return (
            <React.Fragment key={commitHash}>
              <GridItem>{author}</GridItem>
              <GridItem>{commitHash}</GridItem>
              <GridItem>{commitMessage}</GridItem>
              <GridItem>{filesize(size)}</GridItem>
            </React.Fragment>
          );
        })}
      </s.Grid>
    </s.DetailModalWrapper>
  );
};

export default connect(
  ({ detailModal, histories }) => ({
    detailModal, histories,
  }),
  { closeModal },
)(DetailModal);
