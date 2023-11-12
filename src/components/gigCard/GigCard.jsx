import { heart, star } from "../../../svgs";
import "./GigCard.scss";
import { Link } from "react-router-dom";

const GigCard = ({ item }) => {
  return (
    <Link to="/gig/123" className="link">
      <div className="gigCard">
        <div className="image-container">
          <div className="image">
            {" "}
            <img src={item.img} alt="" />
          </div>
          <div className="heart">{heart}</div>
        </div>
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="star">
            {star}
            <span>{item.star}</span>
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
