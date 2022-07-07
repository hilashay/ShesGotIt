import { Link } from "react-router-dom";
import "../Reviews.css";
import Reviews from "./Components/Reviews";
import Review from "./Components/Review";
import useComments from "./CustomHooks/useComments";

function ReviewsPage() {
  // return (
  //   <Review
  //     photoUrl={"https://i.pinimg.com/564x/ef/8d/0e/ef8d0ed54f44194723fa9af29e30dac2.jpg"}
  //     name={"Ori Shay"}
  //     comment={"Comment1"}
  //   />
  // );
  const users = useComments();

  return (
    <div>
      <h1>reviews</h1>
      <div>
        <Reviews users={users} />
      </div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default ReviewsPage;
