import "./search-box.style.css";

const SearchBox = ({ onChangeHandler }) => {
  return (
    <input
      className="search-box-component"
      type="search"
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
