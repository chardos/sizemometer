import React from "react";
import { DetailModalWrapper } from './styled';
import { connect } from 'react-redux';

const DetailModal = ({detailModal}) => {
  return (
    detailModal.isOpen ? (
      <DetailModalWrapper>
        DetailModal
      </DetailModalWrapper>
    ) : null
  );
};

export default connect((state) => ({
  detailModal: state.detailModal
}))(DetailModal);
