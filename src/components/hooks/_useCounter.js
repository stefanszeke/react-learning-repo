import { useState, useEffect, useContext} from "react";
import { CountersContext } from "../contexts/CountersContext";

export default function useCounter(props) {

  const startValue = props.startValue || 0;

  const {count1, setCount1} = useContext(CountersContext);

  // const [count1, setCount] = useState(startValue);
  const [count2, setCount2] = useState(startValue);
  const [count3, setCount3] = useState(startValue);

  const increment = () => { (count1 >= 9) ? setCount1(0) : setCount1(count1 + 1); setCount2(count1) }
  const decrement = () => { (count1 <= 0) ? setCount1(9) : setCount1(count1 - 1); setCount2(count1) }

  function addThree() {
    setCount1(prev => prev + 1);
    setCount1(prev => prev + 1);
    setCount1(prev => prev + 1);
    setCount2(count1)
  }

  function reset() {
    setCount1(0);
    setCount2(count1)
  }

  useEffect(() => { setCount3(count1) }, [count1])

  return {count1, count2, count3, increment, decrement, addThree, reset}
}

