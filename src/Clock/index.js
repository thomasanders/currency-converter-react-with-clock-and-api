import { Timer } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
  const formatDate = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const date = useCurrentDate();

  return (
    <Timer>
      {" "}
      Today is {date.toLocaleDateString("en-GB", formatDate)}
    </Timer>
  );
};

export default Clock;
