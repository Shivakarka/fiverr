import { useState } from "react";
import { searchIcon } from "../../../svgs";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/gigs?search=${input}`);
  };
  return (
    <form className="search">
      <input
        type="text"
        placeholder="Search for any service..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn" onClick={handleSubmit}>
        {searchIcon}
      </button>
    </form>
  );
};

export default SearchBar;
