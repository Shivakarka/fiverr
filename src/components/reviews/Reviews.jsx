import "./Reviews.scss";
import Review from "../review/Review";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Reviews = ({ gigId }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`/reviews/${gigId}`).then((res) => {
        return res.data;
      }),
  });

  if (data.length === 0) {
    return (
      <div className="reviews">
        <h2>Reviews</h2>
        <p style={{ marginTop: "20px" }}>No reviews yet</p>
      </div>
    );
  }

  return (
    <div className="reviews">
      <h2>Reviews</h2>

      {isLoading
        ? "loading"
        : error
        ? "Something went wrong!"
        : data.map((review) => <Review key={review._id} review={review} />)}
    </div>
  );
};

export default Reviews;
