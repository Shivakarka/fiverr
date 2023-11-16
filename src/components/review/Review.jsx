import { useQuery } from "@tanstack/react-query";
import { star } from "../../../svgs";
import "./Review.scss";
import newRequest from "../../utils/newRequest";

const Review = ({ review }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: () =>
      newRequest.get(`/users/${review.userId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="review">
      {isLoading ? (
        () => "loading"
      ) : error ? (
        "Something went wrong!"
      ) : (
        <>
          <div className="user">
            <img className="pp" src={data?.img || "/img/noavatar.jpg"} alt="" />
            <div className="info">
              <div className="name">
                <span>{data?.username}</span>
              </div>
              <div className="country">
                <span>{data?.country}</span>
              </div>
            </div>
          </div>
          <div className="stars">
            {Array(review.star)
              .fill()
              .map((item, i) => (
                <span key={i}>{star}</span>
              ))}
            <span>{review.star}</span>
          </div>
          <p>{review.desc}</p>
          <div className="helpful">
            <span>Helpful?</span>
            <img src="/img/like.png" alt="" />
            <span>Yes</span>
            <img src="/img/dislike.png" alt="" />
            <span>No</span>
          </div>
          <hr></hr>
        </>
      )}
    </div>
  );
};

export default Review;
