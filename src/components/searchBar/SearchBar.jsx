import { searchIcon } from "../../../svgs";
import "./SearchBar.scss";

const SearchBar = ({ setInput, handleSubmit }) => {
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
