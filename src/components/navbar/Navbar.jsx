import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const isActive = () => {
    if (window.scrollY > 0) setActive(true);
    else setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <div className={active ? "navbar active" : "navbar"}>
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
      {active && (
        <>
          <hr />
          <div className="menu">
            <span>Test</span>
            <span>Test</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
