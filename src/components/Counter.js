import './styles/counter.css';
import { useState, useEffect } from "react";
import clsx from "clsx";

export default function Counter(props) {
  const [count, setCount] = useState(0);
  const { className, ...rest } = props;
  const classes = clsx("ui-counter", className);

  const handleIncrementClick = () => (count >= 9) ? setCount(0) : setCount(count + 1)
  const handleDecrementClick = () => (count <= 0) ? setCount(9) : setCount(count - 1)
  
  function handleAddClick() {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  }

  useEffect(() => {
    if(count === 0) { document.title = "React App" }
    else { document.title = `Counter: ${count}` }

    const interval = setInterval(() => {
      document.title = `waiting for counter`
    }, 2000);

    return () => clearInterval(interval);

  }, [count])

  return (
    <div className={classes} {...rest}>
      <h3>Counter</h3>
      <p>( document.title )</p>
      <h2>{count}</h2>
      <div className='ui-counter-buttons'>
        <button onClick={handleIncrementClick}>+</button>
        <button onClick={handleDecrementClick}>-</button>
        <button onClick={handleAddClick}>add3</button>
      </div>
    </div>
  );
}

// useEffect( () => { }, [] ) = componentDidMount, only run once
// useEffect( () => { }, [count] ) = componentDidUpdate, run when count changes
// useEffect( () => { return () => { } }, [] ) = componentWillUnmount, run when component unmounts
// useEffect( () => { return () => { } }, [count] ) = componentWillUnmount, run when component unmounts and count changes
// useEffect( () => {} ) = componentDidMount + componentDidUpdate, run every time on every re-render