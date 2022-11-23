import { createContext, useState } from "react";

export const CountersContext = createContext();

export const CountersProvider = (props) => {
  const [count1, setCount1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const value = {
    count1, setCount1,
    counter2, setCounter2
  };

  return (
    <CountersContext.Provider value={value}>
      {props.children}
    </CountersContext.Provider>
  );
}