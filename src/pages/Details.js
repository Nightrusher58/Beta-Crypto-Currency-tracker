import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import oneCoin from "../Data/getCoinOneCoin";

const Details = () => {
  const { coinId } = useParams();

  const [coin, setCoin] = useState({});
  useEffect(() => {
    const sC = async () => {
      try {
        const response = await oneCoin(coinId);
        console.log(response);
        const objectOfCoins = response.data.coin;
        console.log(objectOfCoins);
        setCoin(objectOfCoins);
      } catch (error) {
        console.log(error);
      }
    };
    sC();
  }, []);

  return (
    <div>
      <h1>{coin.name} Details</h1>
      <img width="50px" src={coin.iconUrl} alt={coin.name} />
      <h3>{coin.description}</h3>
      <p>Market cap : {coin.marketCap}</p>
      <p># of exchanges: {coin.numberOfExchanges}</p>
      {/* {coin.price ? (
        <p>Current Price : {coin.price}</p>
      ) : (
        <p>Price not available</p>
      )}
      {coin.allTimeHigh.price ? (
        <p>All Time High: ${coin.allTimeHigh.price}</p>
      ) : (
        <p>All time High not available</p>
      )}
      <p>Market cap : ${coin.marketCap}</p>
      <p>Current Rank : {coin.rank}</p>
      <p>Circulating Supply : {coin.supply.circulating}</p>
      <p>Max Supply : {coin.supply.max}</p>
      <p>Current Supply at : {coin.supply.supplyAt}</p>
      <p>Total Supply : {coin.supply.total}</p>
      <p>Website Url: {coin.websiteUrl}</p> */}
    </div>
  );
};

export default Details;
