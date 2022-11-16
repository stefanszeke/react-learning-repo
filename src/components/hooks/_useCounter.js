import { useState, useEffect } from "react";

export default function useCounter() {
  const [count1, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

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