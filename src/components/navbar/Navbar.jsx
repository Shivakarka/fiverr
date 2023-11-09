import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          {/* <Link to="/"> */}
          <span className="text">fiverr</span>
          {/* </Link> */}
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          <span>Become a Seller</span>
          <button>Join</button>
        </div>
      </div>
      <hr />
      <div className="menu">
        <span>Test</span>
        <span>Test</span>
      </div>
    </div>
  );
};

export default Navbar;
