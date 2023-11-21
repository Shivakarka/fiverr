import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";
import { checkSvg } from "../../../svgs";
import SearchBar from "../searchBar/SearchBar";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleExploreClick = () => {
    const exploreSection = document.getElementById("explore");
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        {active || pathname !== "/" ? <SearchBar /> : null}
        <div className={`links ${open ? "open" : ""}`}>
          <span style={{ display: "flex", alignContent: "center", gap: "5px" }}>
            {checkSvg} <span style={{ paddingTop: "3px" }}> Fiverr Pro</span>
          </span>
          <span onClick={handleExploreClick} style={{ cursor: "pointer" }}>
            Explore
          </span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div className="user" onClick={() => setOpenMenu(!openMenu)}>
              <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {openMenu && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <>
                    <Link className="link" to="/orders">
                      Orders
                    </Link>
                    <Link className="link" to="/messages">
                      Messages
                    </Link>
                    <a className="link" onClick={handleLogout}>
                      Logout
                    </a>
                  </>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">
                Sign in
              </Link>
              <Link to="/register" className="link">
                <button
                  className={active || pathname !== "/" ? "active-btn" : "btn"}
                >
                  Join
                </button>
              </Link>
            </>
          )}
        </div>
        <div className="menu-icon" onClick={() => setOpen(!open)}>
          {/* Adds hamburger icon here */}
          <span>&#9776;</span>
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/gigs?cat=graphics-design">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/gigs?cat=programming-tech">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/gigs?cat=digital-marketing">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/gigs?cat=video-animation">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/gigs?cat=writing-translation">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/gigs?cat=music-audio">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/gigs?cat=business">
              Business
            </Link>
            <Link className="link menuLink" to="/gigs?cat=data">
              Data
            </Link>
            <Link className="link menuLink" to="/gigs?cat=photography">
              Photography
            </Link>
            <Link className="link menuLink" to="/gigs?cat=ai-services">
              AI Services
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
