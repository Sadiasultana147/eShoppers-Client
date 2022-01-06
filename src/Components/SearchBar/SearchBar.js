import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
import "./SearchBar.css";
import { Container } from "react-bootstrap";

const SearchBar = () => {
  const [APIData, setAPIData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setAPIData(data));
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchInput);

    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };
  return (
    <div className="search-field">
      <Container className="search-container">
        <h2 className="search-heading" style={{ color: "salmon" }}>
          Aurora
        </h2>
        <div className="search mx-auto">
          <form className="searchInputs">
            <input
              placeholder="Search in Aurora...."
              onChange={(e) => searchItems(e.target.value)}
            />
            <button
              style={{
                border: "none",
                backgroundColor: "white",
                color: "tomato",
              }}
            >
              <SearchIcon />
            </button>
          </form>
        </div>
        <div>
          <FavoriteBorderSharpIcon className="cart" />
          <ShoppingCartOutlinedIcon />
        </div>
      </Container>
    </div>
  );
};

export default SearchBar;
