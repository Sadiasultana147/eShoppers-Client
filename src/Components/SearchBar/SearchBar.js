import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
import "./SearchBar.css";
import { Card, Container } from "react-bootstrap";
<<<<<<< HEAD

import { Link } from "react-router-dom";
import SearchProducts from "./SearchProducts";
import { useHistory, useLocation } from 'react-router';
import useAuth from "../../Hook/useAuth";

const SearchBar = () => {
  const [APIData, setAPIData] = useState([]);
  // const [searchText, setSearchText] = useState('');
  const [name, setName] = useState([])
  const { searchText, setSearchText } = useAuth();



  const handleButton = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue)
    console.log(searchText);

    //searchText=searchTextValue

  }






=======
// import SearchResult from "../SearchResult/SearchResult";
// import { Link } from "react-router-dom";

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

  const handleButton = (e) => {
    const searchInput = e.target.value;
    setSearchInput(searchInput);
    const xyz = APIData.filter((item) => item.name == searchInput);
    setFilteredResults(xyz);
  };
>>>>>>> e5af33e43b93f3daa293a1bff3d589b3ea2270c7

  return (
    <div className="search-field">

      <Container className="search-container">
        <h2 className="search-heading" style={{ color: "salmon" }}>
          Aurora
        </h2>

        <div className="search mx-auto">
          <form className="searchInputs">
<<<<<<< HEAD
            <input onChange={handleButton} placeholder="Search in Aurora...." />



            <Link to='/searchResult' >
              <button
                style={{
                  border: "none",
                  backgroundColor: "white",
                  color: "tomato",
                }}

              >

                <SearchIcon />

              </button>
            </Link>

=======
            <input placeholder="Search in Aurora...." />
            {/* <Link to="/searchResult"> */}
            <button
              style={{
                border: "none",
                backgroundColor: "white",
                color: "tomato",
              }}
              onClick={handleButton}
            >
              {/* <div>
                  {filteredResults.map((fr) => (
                    <SearchResult key={fr._id} fr={fr}></SearchResult>
                  ))}
                </div> */}
              <SearchIcon />
            </button>
            {/* </Link> */}
>>>>>>> e5af33e43b93f3daa293a1bff3d589b3ea2270c7
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