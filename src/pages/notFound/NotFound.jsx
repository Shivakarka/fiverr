import { useNavigate } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="notFound">
      <h1>Page not found</h1>
      <button onClick={handleClick}>Go back</button>
    </div>
  );
};

export default NotFound;
