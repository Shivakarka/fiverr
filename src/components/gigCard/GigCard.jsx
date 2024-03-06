import { useQuery } from "@tanstack/react-query";
import { heart, star } from "../../../svgs";
import "./GigCard.scss";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import { PulseLoader } from "react-spinners";

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
            <PulseLoader loading={isLoading} color="#1dbf73" />
          ) : error ? (
            <h1>Something went wrong!</h1>
          ) : (
            <div className="user">
              <img src={data?.img || "/img/noavatar.jpg"} alt="" />
              <span>{data?.username}</span>
            </div>
          )}
          <p>
            {item.desc.slice(0, 150)}
            {item.desc.length > 150 && (
              <span className="readMore">... read more</span>
            )}
          </p>
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
