import './styles/counter.css';
import { useState, useEffect } from "react";
import clsx from "clsx";

export default function Counter(props) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const { className, ...rest } = props;
  const classes = clsx("ui-counter", className, `ui-counter-${props.theme}`);

  const handleIncrementClick = () => { (count >= 9) ? setCount(0) : setCount(count + 1); setCount2(count) }
  const handleDecrementClick = () => { (count <= 0) ? setCount(9) : setCount(count - 1); setCount2(count) }
  
  function handleAddClick() {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount2(count)
  }

  function handleResetClick() {
    setCount(0);
    setCount2(count)
  }

  useEffect(() => {
    if(count === 0) { document.title = "React App" }
    else { document.title = `Counter: ${count}` }

    const interval = setInterval(() => {
      document.title = `waiting for counter`
    }, 2000);

    return () => clearInterval(interval);
  }, [count])

  useEffect(() => { setCount3(count) }, [count])



  return (
    <div className={classes} {...rest}>
      <h3>Counter</h3>
      <p>( document.title )</p>
      <div className="ui-counters">
        <h3>counter: </h3>
        <h2>{count}</h2>
        <h3>a little behind: </h3>
        <h2>{count2}</h2>
        <h3>useEffect: </h3>
        <h2>{count3}</h2>
      </div>
      <div className='ui-counter-buttons'>
        <button onClick={handleIncrementClick}>+</button>
        <button onClick={handleDecrementClick}>-</button>
        <button onClick={handleAddClick}>add3</button>
        <button onClick={handleResetClick}>reset</button>
      </div>
    </div>
  );
}

// useEffect( () => { }, [] ) = componentDidMount, only run once
// useEffect( () => { }, [count] ) = componentDidUpdate, run when count changes
// useEffect( () => { return () => { } }, [] ) = componentWillUnmount, run when component unmounts
// useEffect( () => { return () => { } }, [count] ) = componentWillUnmount, run when component unmounts and count changes
// useEffect( () => {} ) = componentDidMount + componentDidUpdate, run every time on every re-render