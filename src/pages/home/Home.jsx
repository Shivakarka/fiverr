import { cards } from "../../../data";
import Slide from "../../components/Slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./Home.scss";

const Home = () => {
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
    </div>
  );
};

export default Home;
