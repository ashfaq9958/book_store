import React from "react";
import Navbar from "./Navbar/Navbar";
import SearchBar from "./SearchBar/SearchBar";

const Header = () => {
  return (
    <div>
      <SearchBar />
      <Navbar />
    </div>
  );
};

export default Header;
