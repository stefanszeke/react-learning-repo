import { useState, useEffect} from "react";

export default function useCounter(props) {

  const startValue = props.startValue || 0;

  const [count1, setCount] = useState(startValue);
  const [count2, setCount2] = useState(startValue);
  const [count3, setCount3] = useState(startValue);

  const increment = () => { (count1 >= 9) ? setCount(0) : setCount(count1 + 1); setCount2(count1) }
  const decrement = () => { (count1 <= 0) ? setCount(9) : setCount(count1 - 1); setCount2(count1) }

  function addThree() {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount2(count1)
  }

  function reset() {
    setCount(0);
    setCount2(count1)
  }

  useEffect(() => { setCount3(count1) }, [count1])

  return {count1, count2, count3, increment, decrement, addThree, reset}
}

