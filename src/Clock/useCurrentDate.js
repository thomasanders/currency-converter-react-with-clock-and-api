import { useState, useEffect } from "react";

export const useCurrentDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const updateDateInterval = setInterval(() => {
      setDate((date) => (date = new Date()));
    }, 1000);

    return () => {
      clearInterval(updateDateInterval);
    };
  });

  return date;
};
