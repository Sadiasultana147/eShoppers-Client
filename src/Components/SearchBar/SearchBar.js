import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
import "./SearchBar.css";
import { Card, Container } from "react-bootstrap";

const SearchBar = () => {
  const [APIData, setAPIData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/fashionCollection")
      .then((res) => res.json())
      .then((data) => {
        let abc = [...data];

        fetch("http://localhost:5000/electronicCollection")
          .then((res) => res.json())
          .then((data) => {
            abc = [...abc, ...data];

            fetch("http://localhost:5000/sportCollection")
              .then((res) => res.json())
              .then((data) => {
                abc = [...abc, ...data];

                fetch("http://localhost:5000/cosmeticCollection")
                  .then((res) => res.json())
                  .then((data) => {
                    abc = [...abc, ...data];

                    fetch("http://localhost:5000/furnitureCollection")
                      .then((res) => res.json())
                      .then((data) => {
                        abc = [...abc, ...data];
                        setAPIData(abc);
                      });
                  });
              });
          });
      });
  }, []);

  const handleSearchInput = (e) => {
    console.log("yes i am in");
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
              onChange={handleSearchInput}
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
