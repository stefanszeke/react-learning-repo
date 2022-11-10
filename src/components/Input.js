import './styles/input.css';
import clsx from "clsx";
import { useState } from "react";

export default function Input(props) {
  const { children, className, type = 'text',  ...rest } = props;
  const classes = clsx("ui-input", className, `ui-input-${props.theme}`);
  const [display, setDisplay] = useState("write here");

  function handleInputChange(event) {
    setDisplay(event.target.value);
    if(event.target.value === ""){
      setDisplay("write here");
    }
  }

  return (<div className={classes}>
    <h2>{display}</h2>
    <input onChange={handleInputChange}  type={type} {...rest} />
  </div>);


}