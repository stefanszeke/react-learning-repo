import { useEffect, useState, useRef, useContext } from "react";
import clsx from "clsx";
import iconsService from "./services/iconService";
import { ThemeContext } from "./contexts/ThemeContext";
import { CountersContext } from "./contexts/CountersContext";




export default function Counter2(props) {
  const [subCounter, setSubCounter] = useState(0);
  // const [counter, setCounter] = useState(0);
  const [running, setRunning] = useState(false);


  const {counter2, setCounter2} = useContext(CountersContext);
  console.log(counter2);

  const themeContext = useContext(ThemeContext);
  const classes = clsx("ui-counter",'ui-counter2', props.className, `ui-counter-${themeContext.theme}`);

  const timerDiv = useRef(null);

  useEffect(() => {
    
    if (running) {
      let timer = setTimeout(() => setSubCounter(prev => prev + 1), 250);


      if (subCounter === 4) {
        setCounter2(prev => prev + 1);
        setSubCounter(0);
      }
      return () => clearInterval(timer);
    }
    else {
      setSubCounter(0);
    }
  }, [counter2, running, subCounter, setCounter2]);

  useEffect(() => {
    if(running) {
      if(subCounter === 0) { timerDiv.current.style.height = `100%` }
      else { timerDiv.current.style.height = `${subCounter * 25}%` }
    }

  }, [subCounter, running])


  function handleButtonClick() {
    setRunning(prev => !prev);
    if(running) {
      timerDiv.current.style.height = `0%`;
    }
  }

  return (
    <div className={classes}>
      <p>useRef()</p>
      <button className="timer-button" onClick={handleButtonClick}>
        {running ? iconsService.pause : iconsService.play}
      </button>

      <div className="timer-box">
      <h3 className="timer-number">{counter2}</h3>
        <div className="timer-state" ref={timerDiv}></div>
      </div>

      <p>useContext()</p>
    </div>
  )
}