import React from "react";
import { useState, useEffect } from "react";
import hundredList from "../Data/getAllCoins";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState({});
  const [searchResult, setSearchResult] = useState(null);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const showCoins = async () => {
      try {
        const response = await hundredList;
        const arrayOfHundredCoins = response.data.coins;
        setData(arrayOfHundredCoins);
      } catch (error) {
        console.log(error);
      }
    };
    showCoins();
  }, []);

  const handleClick = () => {
    const result = data.filter(
      (item) => item.name.toLowerCase() === inputValue.toLowerCase()
    );

    return setSearchResult(result[0]);
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search your Crypto Currency here"
      ></input>
      <button type="button" onClick={handleClick}>
        Search
      </button>
      {searchResult ? (
        <div>
          <h2>{searchResult.name}</h2>
          <img
            width="50px"
            src={searchResult.iconUrl}
            alt={searchResult.name}
          />
          <p>Market Cap : ${searchResult.marketCap}</p>
          <p>Price: ${searchResult.price}</p>
        </div>
      ) : (
        <div>
          <h2>Search your favorite Crypo Currency</h2>
        </div>
      )}
    </div>
  );
};

export default Search;
