import { star } from "../../svgs";

function showStar(data) {
  if (Math.round(data.totalStars / data.starNumber)) {
    return Array(Math.round(data.totalStars / data.starNumber))
      .fill()
      .map((item, i) => star);
  } else {
    return star;
  }
}

export default showStar;
