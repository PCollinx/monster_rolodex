import { ChangeEvent } from "react";

import "./search-box.style.css";

type SearchBoxProps = {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const SearchBox = ({ onChangeHandler, placeholder }: SearchBoxProps) => {
  return (
    <input
      className="search-box-component"
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
