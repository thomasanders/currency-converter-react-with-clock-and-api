import { Info, Paragraph } from "./styled";

const Result = ({ result }) => {
  return (
    <Paragraph>
      For:{" "}
      <strong>
        {" "}
        {result !== undefined && (
          <>
            {result.sourceAmount.toFixed(2)}
            {"EUR"}

            {"   -You Get :   "}
            <strong>
              {result.targetAmount.toFixed(8)}
              {result.currency}
            </strong>
            <Info>
              Update from app.currencyapi.com from day : {result.date}
            </Info>
          </>
        )}
      </strong>
    </Paragraph>
  );
};

export default Result;
