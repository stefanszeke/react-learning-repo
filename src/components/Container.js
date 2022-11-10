import './styles/container.css';
import clsx from "clsx";

export default function Container(props) {
  const { children, className, ...rest } = props;
  const classes = clsx("ui-container", className, `ui-container-${props.theme}`);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}