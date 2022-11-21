import './styles/button2.css';
import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default function Button2(props) {

  const themeContext = useContext(ThemeContext);
  const classes = clsx("ui-button2", `ui-button2-${themeContext.theme}`);

  return (
    <button onClick={props.onButtonClick} className={classes} {...props}>
      {props.children}
    </button>
  );
}