import React from 'react';
import { connect } from 'react-redux';
import filesize from 'filesize';
import * as s from './styled';
import HorizontalBar from './HorizontalBar';
import { closeModal } from '../../ducks/detailModal';
import { shortCommitHash, getPercentageFromRange } from '../../utils';

const DetailModal = ({ detailModal, histories, closeModal }) => {
  if (!detailModal.isOpen) return null;

  const history = histories.find((hist) => hist.filename === detailModal.filename);
  const maxValue = history.data.reduce((acc, curr) => ((acc > curr.size) ? acc : curr.size), 0);
  const minValue = history.data.reduce((acc, curr) => (
    (acc < curr.size) ? acc : curr.size
  ), history.data[0].size);

  return (
    <s.DetailModalWrapper>
      <s.Title>{history.filename}</s.Title>
      <s.CloseButton onClick={closeModal}>X</s.CloseButton>

      <s.Grid>
        <s.GridTitle>Author</s.GridTitle>
        <s.GridTitle>Commit hash</s.GridTitle>
        <s.GridTitle>Commit message</s.GridTitle>
        <s.GridTitle>Size</s.GridTitle>
        <s.GridTitle />

        {history.data.map(({
          commitHash, author, commitMessage, size,
        }) => {
          const percentage = getPercentageFromRange({
            minValue,
            maxValue,
            currentValue: size,
          });

          const GridItem = commitHash === detailModal.commitHash
            ? s.HighlightedGridItem
            : s.GridItem;

          return (
            <React.Fragment key={commitHash}>
              <GridItem>{author}</GridItem>
              <GridItem>{shortCommitHash(commitHash)}</GridItem>
              <GridItem>{commitMessage}</GridItem>
              <GridItem>{filesize(size)}</GridItem>
              <GridItem><HorizontalBar percentage={percentage} /></GridItem>
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
