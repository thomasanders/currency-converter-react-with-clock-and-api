import { useState } from "react";
import Result from "./Result";
import {
  StyledForm,
  Legend,
  Label,
  Special,
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

  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <fieldset>
        <Legend>Money Exchange</Legend>
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
                Choose Currency:
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
                Amount in EUR<Special>*</Special>:
                <Input
                  placeholder="Enter Amount"
                  required
                  type="number"
                  step="0.01"
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
