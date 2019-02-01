import React from "react";
import * as s from './styled';
import { connect } from 'react-redux';
import filesize from 'filesize';
import { closeModal } from '../../ducks/detailModal';

const DetailModal = ({detailModal, histories, closeModal}) => {
  if (!detailModal.isOpen) return null;

  const history = histories.find((hist) => hist.filename === detailModal.filename)

  return (
    <s.DetailModalWrapper>
      <s.Title>{history.filename}</s.Title>
      <s.CloseButton onClick={closeModal}>X</s.CloseButton>
      
      <s.Grid>
        <s.GridTitle>Author</s.GridTitle>
        <s.GridTitle>Commit hash</s.GridTitle>
        <s.GridTitle>Commit message</s.GridTitle>
        <s.GridTitle>Size</s.GridTitle>

        {history.data.bars.map(({tooltip}) => {
          const GridItem = tooltip.commitHash === detailModal.commitHash
            ? s.HighlightedGridItem
            : s.GridItem;

          return (
            <React.Fragment key={tooltip.commitHash}>
              <GridItem>{tooltip.author}</GridItem>
              <GridItem>{tooltip.commitHash}</GridItem>
              <GridItem>{tooltip.commitMessage}</GridItem>
              <GridItem>{filesize(tooltip.size)}</GridItem>
            </React.Fragment>
          )
        })}
      </s.Grid>
    </s.DetailModalWrapper>
  );
};

export default connect(
  ({detailModal, histories}) => ({
    detailModal, histories
  }),
  { closeModal }
)(DetailModal);
