import API_KEY from "../key";

const url =
  "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=10&offset=0";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

const getCoins = async (link, option) => {
  try {
    const response = await fetch(link, option);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

const list = getCoins(url, options);

export default list;
