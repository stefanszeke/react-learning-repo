import './styles/input.css';
import clsx from "clsx";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default function Input(props) {
  const [display, setDisplay] = useState("write here");
  const { children, className, type = 'text',  ...rest } = props;

  const themeContext = useContext(ThemeContext);
  const classes = clsx("ui-input", className, `ui-input-${themeContext.theme}`);
  



  function handleInputChange(event) {
    setDisplay(event.target.value);
    if(event.target.value === ""){
      setDisplay("write here");
    }
  }

  return (<div className={classes}>
    <h2>{display}</h2>
    <input ref={props.inputref} onChange={handleInputChange}  type={type} {...rest} />
  </div>);
}

// useRef is a hook that allows you to create a reference to a DOM element. 
// It is used to access the DOM element directly. In this case, 
// we are using it to access the input element from App.js and focus it when the component is mounted. This is a common use case for useRef.