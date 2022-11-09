import clsx from "clsx";

export default function Button(props) {
  const { children, className, ...rest } = props;

  const classes = clsx("ui-button", className);
  return (
      <button onClick={props.onButtonClick} className={classes} {...rest}>
        {children}
      </button>
  );
}

function getColor(classes) {
  if (classes.includes("greenBtn")) {
    return "green";
  } else if (classes.includes("violetBtn")) {
    return "violet";
  } else {
    return "default color";
  }
}