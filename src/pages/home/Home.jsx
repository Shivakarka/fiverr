import { useState } from "react";
import { cards, projects } from "../../../data";
import Slide from "../../components/Slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./Home.scss";
import { checkSvg, fiverTitle, tickImg } from "../../../svgs";
import ProjectCard from "../../components/projectCard/ProjectCard";

const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <div className="Slides-container">
        <h2>Popular services</h2>
        <Slide slidesToShow={5} arrowsScroll={5}>
          {cards.map((card) => (
            <CatCard key={card.id} card={card} />
          ))}
        </Slide>
      </div>
      <div className="features">
        <div className="container">
          <div className="item">
            <h2>The best part? Everything.</h2>
            <div className="title">
              {tickImg}
              <h6>Stick to your budget</h6>
            </div>
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              {tickImg}
              <h6>Get quality work done quickly</h6>
            </div>
            <p>
              Hand your project over to a talented freelancer in minutes, get
              long-lasting results.
            </p>
            <div className="title">
              {tickImg}
              <h6>Pay when you're happy</h6>
            </div>
            <p>
              Upfront quotes mean no surprises. Payments only get released when
              you approve.
            </p>
            <div className="title">
              {tickImg}
              <h6>Count on 24/7 support</h6>
            </div>
            <p>
              Our round-the-clock support team is available to help anytime,
              anywhere.
            </p>
          </div>
          <div className="item" onClick={() => setShow(true)}>
            {show ? (
              <video
                src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
                controls
                autoPlay
                poster="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
              ></video>
            ) : (
              <picture>
                <div className="play-btn">
                  <i className="fa fa-play" style={{ fontSize: "40px" }}></i>
                </div>
                <img
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
                  alt=""
                />
              </picture>
            )}
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>You need it, we've got it</h1>
          <div className="items">
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Graphics & Design</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt=""
              />
              <div className="line"></div>

              <span>Digital Marketing</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Writing & Translation</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Video & Animation</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Music & Audio</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Programming & Tech</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Business</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Lifestyle</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Data</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Photography</span>
            </div>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              <span className="fiverr-title">{fiverTitle}</span>{" "}
              <span>Business Solutions</span>
            </h1>
            <h2>Advanced solutions and professional talent for businesses</h2>
            <ul>
              <li>
                <div>{checkSvg}</div>
                <div className="features-content">
                  <div>
                    <b>Fiverr Pro</b>
                  </div>
                  <div>
                    Access top freelancers and professional business tools for
                    any project
                  </div>
                </div>
              </li>
              <li>
                <div>{checkSvg}</div>
                <div className="features-content">
                  <div>
                    <b>Fiverr Certified</b>
                  </div>
                  <div>
                    {" "}
                    Build your own branded marketplace of certified experts
                  </div>
                </div>
              </li>
              <li>
                <div>{checkSvg}</div>
                <div className="features-content">
                  <div>
                    <b>Fiver Enterprise</b>
                  </div>
                  <div>
                    {" "}
                    Manage your freelance workforce and onboard additional
                    talent with an end-to-end SaaS solution
                  </div>
                </div>
              </li>
            </ul>

            <button>Learn More</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="inspiring">
        <div className="inspiring-title">
          <h2>Inspiring work made on Fiverr</h2>
          <a href="#">See more {` >`}</a>
        </div>
        <Slide slidesToShow={4} arrowsScroll={4}>
          {projects.map((card) => (
            <ProjectCard key={card.id} card={card} />
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Home;
