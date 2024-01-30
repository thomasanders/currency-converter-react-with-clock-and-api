import axios from "axios";

const URL =
  "https://api.currencyapi.com/v3/latest?apikey=cur_live_5L9vcLtZkMhD7SoEV0yeOkzuLGe6rox1C2J11ej0&currencies=BTC%2CETH%2CLTC%2CUSDC%2CUSDT&base_currency=EUR";

export const getCurrenciesDataFromApi = async () => {
  const response = await axios.get(URL);
  if (response.status !== 200) {
    throw new Error();
  }
  return response.data;
};
