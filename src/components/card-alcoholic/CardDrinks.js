import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import {debounce} from 'lodash'
import "./Allcard.css";
import SearchBar from "../search-bar/SearchBar";
const REACT_APP_AS_URL =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";
const CardDrinks = () => {
  const [search, setSearch] = useState("");
  const [datafetch, setDatafetch] = useState([]);
  useEffect(() => {
    fetch(REACT_APP_AS_URL)
      .then((res) => res.json())
      .then((data) => {
        setDatafetch(data.drinks);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const searchText = (event) => {
    setSearch(event.target.value);
  };
  const debouncedChangeHandler = useCallback(
    debounce(searchText.bind(this), 400)
  , []);

  let dataSearch = datafetch.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(search.toString().toLowerCase())
    );
  });

 
  console.log(dataSearch);
  return (

    <div className="header-main">
         
        <SearchBar  placeholder="Type to Search..."   onChange={debouncedChangeHandler}/>
      
    {dataSearch.map((index) => (
        <div className="card-container" key={index.idDrink}>
          <div className="card u-clearfix">
            <div className="card-body">
              <span className="card-number card-circle subtle">
                {index.idDrink}
              </span>
              <span className="card-author subtle">{index.strAlcoholic}</span>
              <h2 className="card-title">{index.strDrink}</h2>

              <span className="card-description subtle Ingredient">
                Ingredient: {index.strIngredient1}
              </span>
              <p className=" subtle ">{index.strInstructions}</p>
              <div className="card-read">Read More</div>
              <span className="card-tag card-circle-c subtle">C</span>
            </div>
            <img src={index.strDrinkThumb} alt="" className="card-media" />
          </div>
          <div className="card-shadow"></div>
        </div>
      ))}
    </div>
  );
};

export default CardDrinks;
