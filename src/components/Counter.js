import './styles/counter.css';
import { useEffect } from "react";
import Buttons from "./Buttons";
import clsx from "clsx";
import useCounter from "./hooks/_useCounter";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";


export default function Counter(props) {
  const {count1, count2, count3, increment, decrement, addThree, reset} = useCounter({startValue: 1});
  const { className, ...rest } = props;

  const themeContext = useContext(ThemeContext);
  const classes = clsx("ui-counter", className, `ui-counter-${themeContext.theme}`);

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
      <p>( affect document.title, use custom hook )</p>
      <p>( useContext )</p>
      <div className="ui-counters">
        <h3>counter: </h3>
        <h2>{count1}</h2>
        <h3>a little behind: </h3>
        <h2>{count2}</h2>
        <h3>useEffect: </h3>
        <h2>{count3}</h2>
      </div>
      <div className='ui-counter-buttons'>
        <Buttons.Default onClick={increment}>+</Buttons.Default>
        <Buttons.Default onClick={decrement}>-</Buttons.Default>
        <Buttons.Default onClick={addThree}>add3</Buttons.Default>
        <Buttons.Default onClick={reset}>reset</Buttons.Default>
      </div>
    </div>
  );
}

// useEffect( () => { }, [] ) = componentDidMount, only run once
// useEffect( () => { }, [count] ) = componentDidUpdate, run when count changes
// useEffect( () => { return () => { } }, [] ) = componentWillUnmount, run when component unmounts
// useEffect( () => { return () => { } }, [count] ) = componentWillUnmount, run when component unmounts and count changes
// useEffect( () => {} ) = componentDidMount + componentDidUpdate, run every time on every re-render