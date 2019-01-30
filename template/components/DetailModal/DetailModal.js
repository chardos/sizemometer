import React from "react";
import { DetailModalWrapper } from './styled';
import { connect } from 'react-redux';

const DetailModal = ({detailModal, histories}) => {
  if (!detailModal.isOpen) return null;

  const history = histories.find((hist) => hist.filename === detailModal.filename)

  console.log('history', history);

  return (
    <DetailModalWrapper>
      <table>
        {history.data.bars.map(({tooltip}) => (
          <tr>
            <td>{tooltip.author}</td>
            <td>{tooltip.commitHash}</td>
            <td>{tooltip.commitMessage}</td>
            <td>{tooltip.size}</td>
          </tr>
        ))}
      </table>
    </DetailModalWrapper>
  );
};

export default connect(({detailModal, histories}) => ({
  detailModal, histories
}))(DetailModal);
