import React from "react";

const ReviewModal = (props) => {
  const { showModal, onClose, review } = props;
  //   console.log("review ", review);

  return !showModal ? null : (
    <div className="modal-container">
      <div id="review-modal-element-container" className="modal-content">
        <div className="modal-header">
          <h4>{review.name}</h4>
        </div>
        <img className="modal-photos" src={review.photUrl} alt="" />
        <div className="modal-body">{review.comment}</div>
        <div className="modal-footer">
          <button className="modal-close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// const ReviewModal = (props) => {
//    <div>modal</div>
//   };

export default ReviewModal;
