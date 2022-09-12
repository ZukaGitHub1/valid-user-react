import React from 'react'
import "./SearchBar.css"
import searchImg from "../../images/search-img.svg";
const SearchBar = ({...props}) => {
  return (
    <div className="search-box">
      <img  className='search-Bar'  src={searchImg} alt="search" />
     
    <input   {...props} type="text" className="input-search" />
  </div>
  )
}

export default SearchBar

