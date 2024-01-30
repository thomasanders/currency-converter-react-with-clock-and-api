import { useState } from "react";
import Result from "./Result";
import {
  StyledForm,
  Legend,
  Label,
  Select,
  Input,
  Button,
  Loading,
  Failure,
} from "./styled";
import { useRatesData } from "./useRatesData";

const Form = () => {
  const [result, setResult] = useState();
  const { rates, state, date } = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = rates[currency].value;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
      date: new Date(date).toLocaleDateString("en-GB"),
    });
  };

  const [currency, setCurrency] = useState("BTC");
  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <fieldset>
        <Legend>CRYPTO-EURO Exchange</Legend>
        {state === "loading" ? (
          <Loading>
            Please Wait...<br /> ...Loading current exchange rates
          </Loading>
        ) : state === "error" ? (
          <Failure>
            ...Check Your internet connection
          </Failure>
        ) : (
          <>
               <p>
              <Label>
                Crypto You Buy:
                <Select onChange={({ target }) => setCurrency(target.value)}>
                  {Object.keys(rates).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </Select>
              </Label>
            </p>
            <p>
              <Label>
                Euro You Spend*:
                <Input
                  placeholder="Enter Amount"
                  required
                  type="number"
                  step="1"
                  value={amount}
                  onChange={({ target }) => setAmount(target.value)}
                ></Input>
              </Label>
            </p>
         
            <p>
              <Button>Calculate!</Button>
            </p>
          </>
        )}
      </fieldset>
      <Result result={result} />
    </StyledForm>
  );
};

export default Form;
