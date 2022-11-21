import './styles/counter.css';
import { useEffect } from "react";
import clsx from "clsx";
import useCounter from "./hooks/_useCounter";

export default function Counter(props) {
  const {count1, count2, count3, increment, decrement, addThree, reset} = useCounter({startValue: 1});

  const { className, ...rest } = props;
  const classes = clsx("ui-counter", className, `ui-counter-${props.theme}`);

  useEffect(() => {
    if(count1 === 0) { document.title = "React App" }
    else { document.title = `Counter: ${count1}` }

    const interval = setInterval(() => {
      document.title = `waiting for counter`
    }, 2000);

    return () => clearInterval(interval);
  }, [count1])

  return (
    <div className={classes} {...rest}>
      <h3>Counter</h3>
      <p>( document.title )</p>
      <div className="ui-counters">
        <h3>counter: </h3>
        <h2>{count1}</h2>
        <h3>a little behind: </h3>
        <h2>{count2}</h2>
        <h3>useEffect: </h3>
        <h2>{count3}</h2>
      </div>
      <div className='ui-counter-buttons'>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={addThree}>add3</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}

// useEffect( () => { }, [] ) = componentDidMount, only run once
// useEffect( () => { }, [count] ) = componentDidUpdate, run when count changes
// useEffect( () => { return () => { } }, [] ) = componentWillUnmount, run when component unmounts
// useEffect( () => { return () => { } }, [count] ) = componentWillUnmount, run when component unmounts and count changes
// useEffect( () => {} ) = componentDidMount + componentDidUpdate, run every time on every re-render