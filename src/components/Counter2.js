import { useEffect, useState, useRef } from "react";
import clsx from "clsx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'




export default function Counter2(props) {
  const [subCounter, setSubCounter] = useState(0);
  const [counter, setCounter] = useState(0);
  const [running, setRunning] = useState(false);

  const faPlayIcon = <FontAwesomeIcon icon={faPlay} />
  const faPauseIcon = <FontAwesomeIcon icon={faPause} />

  const classes = clsx("ui-counter",'ui-counter2', props.className, `ui-counter-${props.theme}`);

  const timerDiv = useRef(null);

  useEffect(() => {
    
    if (running) {
      let timer = setTimeout(() => setSubCounter(prev => prev + 1), 250);


      if (subCounter === 4) {
        setCounter(prev => prev + 1);
        setSubCounter(0);
      }
      return () => clearInterval(timer);
    }
    else {
      setSubCounter(0);
    }
  }, [counter, running, subCounter]);

  useEffect(() => {
    if(running) {
      if(subCounter === 0) { timerDiv.current.style.height = `100%` }
      else { timerDiv.current.style.height = `${subCounter * 25}%` }
    }

  }, [subCounter])


  function handleButtonClick() {
    setRunning(prev => !prev);
    if(running) {
      timerDiv.current.style.height = `0%`;
    }
  }

  return (
    <div className={classes}>
      
      <button className="timer-button" onClick={handleButtonClick}>
        {running ? faPauseIcon : faPlayIcon}
      </button>

      <div className="timer-box">
      <h3 className="timer-number">{counter}</h3>
        <div className="timer-state" ref={timerDiv}></div>
      </div>

    </div>
  )
}