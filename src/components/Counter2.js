import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Counter2(props) {
  const [counter, setCounter] = useState(0);
  const [running, setRunning] = useState(false);

  const classes = clsx("ui-counter", props.className, `ui-counter-${props.theme}`);


  useEffect(() => {
    if (running) {
      let timer = setTimeout(() => setCounter(prev => prev + 1), 1000);
      return () => clearInterval(timer);
    }
  }, [counter, running]);


  function handleButtonClick() {
    if(!running) setCounter(prev => prev + 1);
    setRunning(prev => !prev);
  }

  return (
    <div className={classes}>
      <h3>{counter}</h3>
      <button onClick={handleButtonClick}> Start/Stop </button>
    </div>
  )
}