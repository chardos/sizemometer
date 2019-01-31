import React from "react";
import * as styled from './styled';
import { connect } from 'react-redux';

const DetailModal = ({detailModal, histories}) => {
  if (!detailModal.isOpen) return null;

  const history = histories.find((hist) => hist.filename === detailModal.filename)

  console.log('history', history);

  return (
    <styled.DetailModalWrapper>
      <styled.Title>{history.filename}</styled.Title>
      
      <styled.Grid>
        {history.data.bars.map(({tooltip}) => (
          <React.Fragment key={tooltip.commitHash}>
            <div>{tooltip.author}</div>
            <div>{tooltip.commitHash}</div>
            <div>{tooltip.commitMessage}</div>
            <div>{tooltip.size}</div>
          </React.Fragment>
        ))}
      </styled.Grid>
    </styled.DetailModalWrapper>
  );
};

export default connect(({detailModal, histories}) => ({
  detailModal, histories
}))(DetailModal);
