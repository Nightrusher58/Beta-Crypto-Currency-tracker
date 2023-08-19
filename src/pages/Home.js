import React from "react";
import list from "../Data/data";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const showCoins = async () => {
      try {
        const response = await list;
        const arrayOfCoins = response.data.coins;
        setData(arrayOfCoins);
      } catch (error) {
        console.log(error);
      }
    };
    showCoins();
  }, []);

  return (
    <div>
      <h3>Top 20 Crypto Currencies</h3>

      {data.map((item) => {
        const { name, price, rank, symbol, uuid, marketCap, iconUrl } = item;

        return (
          <div key={uuid}>
            <Link to={`/details/${uuid}`}>
              <div>
                <img src={iconUrl} alt={name} width="25px" />
                <h5>{name}</h5>
                <p>{symbol}</p>
                <p>${price}</p>
                <div>
                  <p>Market Rank: {rank}</p>
                  <p>Market Cap: {marketCap}</p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
