import { useQuery } from "@tanstack/react-query";
import { heart, star } from "../../../svgs";
import "./GigCard.scss";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";

const GigCard = ({ item }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
  });

  // console.log(data);
  return (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gigCard">
        <div className="image-container">
          <div className="image">
            {" "}
            <img src={item.cover} alt="" />
          </div>
          <div className="heart">{heart}</div>
        </div>
        <div className="info">
          {isLoading ? (
            "loading"
          ) : error ? (
            "Something went wrong!"
          ) : (
            <div className="user">
              <img src={data.img || "/img/noavatar.jpg"} alt="" />
              <span>{data.username}</span>
            </div>
          )}
          <p>{item.desc}</p>
          <div className="star">
            {star}
            <span>
              {!isNaN(item.totalStars / item.starNumber) &&
                Math.round(item.totalStars / item.starNumber)}
            </span>
          </div>
        </div>
        <div className="detail">
          <div className="price">
            <h2>
              From $ {item.price}
              <sup>99</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
