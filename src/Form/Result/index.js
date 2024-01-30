import { Info, Paragraph } from "./styled";

const Result = ({ result }) => {
  return (
    <Paragraph>
      Result:{" "}
      <strong>
        {" "}
        {result !== undefined && (
          <>
            {result.sourceAmount.toFixed(2)}
            {"EUR"}
            <strong>
              {" = "}
              {result.targetAmount.toFixed(2)}
              {result.currency}
            </strong>
            <Info>Update from app.currencyapi.com from day : {result.date}</Info>
          </>
        )}
      </strong>
    </Paragraph>
  );
};

export default Result;
