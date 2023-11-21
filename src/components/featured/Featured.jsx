import "./Featured.scss";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1 className="title">
            Find the right{" "}
            <span>
              <em>freelance</em>
            </span>{" "}
            service, right away
          </h1>
          <SearchBar />
          <div className="popular">
            <span>Popular:</span>
            <Link to="/gigs?cat=graphics-design">
              <button>Website Design</button>
            </Link>
            <Link to="/gigs?cat=programming-tech">
              <button>WordPress</button>
            </Link>
            <Link to="/gigs?cat=graphics-design">
              <button>Logo Design</button>
            </Link>
            <Link to="/gigs?cat=graphics-design">
              <button>AI Services</button>
            </Link>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
