import './_components.css';
import clsx from "clsx";
import { useState } from "react";

export default function Input(props) {
  const { children, className, type = 'text',  ...rest } = props;
  const classes = clsx("ui-input", className);
  const [display, setDisplay] = useState("write here");

  function handleInputChange(event) {
    setDisplay(event.target.value);
    if(event.target.value === ""){
      setDisplay("write here");
    }
  }

  return (<>
    <h2>{display}</h2>
    <input onChange={handleInputChange} className={classes} type={type} {...rest} />
  </>);


}