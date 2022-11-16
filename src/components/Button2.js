import './styles/button2.css';
import clsx from "clsx";

export default function Button2(props) {

  const classes = clsx("ui-button2", `ui-button2-${props.theme}`);

  return (
    <button onClick={props.onButtonClick} className={classes} {...props}>
      {props.children}
    </button>
  );
}