import { useParams } from "react-router-dom";
import API_KEY from "../key";

const singleCoin = async (id) => {
  const url = `https://coinranking1.p.rapidapi.com/coin/${id}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
    // console.log(result);
  } catch (error) {
    console.error(error);
  }
};

const oneCoin = singleCoin;

export default oneCoin;
