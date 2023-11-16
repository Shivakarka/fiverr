import "./Reviews.scss";
import Review from "../review/Review";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useState } from "react";

const Reviews = ({ gigId }) => {
  const queryClient = useQueryClient();
  const [err, setErr] = useState("");

  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`/reviews/${gigId}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post("/reviews", review);
    },
    onSuccess: () => {
      setErr("");
      queryClient.invalidateQueries(["reviews"]);
    },
    onError: (error) => {
      setErr(error?.response?.data?.error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    mutation.mutate({ gigId, desc, star });
  };

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {isLoading
        ? "loading"
        : error
        ? "Something went wrong!"
        : data.map((review) => <Review key={review._id} review={review} />)}
      {err && setTimeout(() => setErr(""), 6000) && (
        <p className="err">{err}</p>
      )}
      <div className="add">
        <h3>Add a review</h3>
        <form className="addForm" onSubmit={(e) => handleSubmit(e)}>
          <textarea name="desc" cols="40" rows="8"></textarea>
          <select name="star">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
