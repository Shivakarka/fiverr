import { Link, useParams } from "react-router-dom";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";
import { tick } from "../../../svgs";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import Reviews from "../../components/reviews/Reviews";
import showStar from "../../utils/showStars";

function Gig() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  const userId = data?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });

  return (
    <div className="gig">
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="container">
          <div className="left">
            <span className="breadcrumbs">
              <div>
                <Link to="/">
                  <img
                    className="home-icon"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/home-breadcrumb.2ba1681.svg"
                    alt="Fiverr"
                  />
                </Link>{" "}
              </div>
              <div>/ Graphics & Design &gt;</div>
            </span>
            <h1>{data.title}</h1>
            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <div className="user">
                <div>
                  {" "}
                  <img className="pp" src={"/img/noavatar.jpg"} alt="" />
                </div>
                <div className="user-info">
                  <span>{dataUser?.username}</span>
                  <div className="stars">
                    {showStar(data)}
                    <span>
                      {isNaN(Math.round(data.totalStars / data.starNumber))
                        ? 0
                        : Math.round(data.totalStars / data.starNumber)}
                    </span>
                  </div>
                </div>
              </div>
            )}
            {(
              <Slider slidesToShow={1} arrowsScroll={1} className="slider">
                {data?.images?.map((img) => (
                  <img key={img} src={img} alt="" />
                ))}
              </Slider>
            ) || "No images"}
            <h2>About This Gig</h2>
            <p>{data.desc}</p>
            <div className="seller">
              <h2>About The Seller</h2>
              <div className="user">
                <img src={dataUser?.img || "/img/noavatar.jpg"} alt="" />
                <div className="info">
                  <span>{dataUser?.username}</span>
                  <div className="stars">
                    {showStar(data)}
                    <span>
                      {isNaN(Math.round(data.totalStars / data.starNumber))
                        ? 0
                        : Math.round(data.totalStars / data.starNumber)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="btn">
                <button>Contact Me</button>
              </div>
              <div className="box">
                <div className="items">
                  <div className="item">
                    <span className="title">From</span>
                    <span className="desc">{dataUser?.country}</span>
                  </div>
                  <div className="item">
                    <span className="title">Member since</span>
                    <span className="desc">Aug 2022</span>
                  </div>
                  <div className="item">
                    <span className="title">Avg. response time</span>
                    <span className="desc">4 hours</span>
                  </div>
                  <div className="item">
                    <span className="title">Last delivery</span>
                    <span className="desc">1 day</span>
                  </div>
                  <div className="item">
                    <span className="title">Languages</span>
                    <span className="desc">English</span>
                  </div>
                </div>
                <hr />
                <p>{dataUser?.desc}</p>
              </div>
            </div>
            <Reviews gigId={id} />
          </div>
          <div className="right">
            <div className="price">
              <h3>{data.shortTitle}</h3>
              <h2>$ {data.price}</h2>
            </div>
            <p>{data.desc}</p>
            <div className="details">
              <div className="details-item">
                <img src="/img/clock.png" alt="" />
                <span>{data.deliveryTime} Days Delivery</span>
              </div>
              <div className="details-item">
                <img src="/img/recycle.png" alt="" />
                <span>{data.revisionNumber} Revisions</span>
              </div>
            </div>
            <div className="features">
              {data.features.map((feature) => (
                <div className="details-item" key={feature}>
                  {tick}
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Link to={`/pay/${id}`}>
              <button className="payment-btn">Continue</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gig;
