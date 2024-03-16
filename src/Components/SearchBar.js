import React from "react";
import { Input } from "antd";
import "./SearchBar.css";

const { Search } = Input;

const SearchBar = ({ onSearch }) => {
  const handleSearch = (value) => {
    onSearch(value);
  };

  return (
    <div className="searchbar">
      <Search
        placeholder="Search"
        enterButton
        size="large"
        onSearch={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
