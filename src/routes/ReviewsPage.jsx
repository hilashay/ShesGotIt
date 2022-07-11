import { Link } from "react-router-dom";
import "../Reviews.css";
import Reviews from "./Components/Reviews";
import Review from "./Components/Review";
import useComments from "./CustomHooks/useComments";
import ReviewModal from "./Components/ReviewModal";
import { useState } from "react";

function ReviewsPage() {
  const [showModal, setShowModal] = useState(false);
  const users = useComments();
  const [selectedReview, setSelectedReview] = useState();

  const handleOutsideClick = (e) => {
    if (e.target.className !== "review" && e.target.className !== "modal-content") {
      setShowModal(false);
    }
  };
  // const handleOutsideClick = (e) => {
  //   console.log("e", e);
  //   console.log("e.target.clientX", e.clientX);
  //   console.log("e.target.clientX", e.clientX);
  //   console.log("e.target.clientY", e.clientY);
  //   console.log("e.target.clientY", e.clientY);
  //   if (showModal && !(e.clientX > 350 && e.clientX < 750 && e.clientY > 250 && e.clientY < 650)) {
  //     setShowModal(false);
  //     console.log("showModal", showModal);
  //   }
  // };

  return (
    <div onClick={handleOutsideClick}>
      <h1>Reviews</h1>
      <Reviews
        users={users}
        onSelectReview={(review) => {
          setSelectedReview(review);
          setShowModal(true);
        }}
        showModal={() => setShowModal(false)}
      />

      <ReviewModal
        onClose={() => setShowModal(false)}
        showModal={showModal}
        review={selectedReview}
      />

      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default ReviewsPage;
