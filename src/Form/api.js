import axios from "axios";

const URL =
  "https://api.currencyapi.com/v3/latest?apikey=cur_live_5L9vcLtZkMhD7SoEV0yeOkzuLGe6rox1C2J11ej0&currencies=PLN%2CUSD%2CBTC%2CETH&base_currency=EUR";

export const getCurrenciesDataFromApi = async () => {
  const response = await axios.get(URL);
  if (response.status !== 200) {
    throw new Error();
  }
  return response.data;
};
