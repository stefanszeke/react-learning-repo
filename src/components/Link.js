import './_components.css';
import clsx from "clsx";

export default function Link(props) {
  const { children, className, ...rest } = props;
  const classes = clsx("ui-link", className);
  return (
      <a className={classes} {...rest}>
        {children}
      </a>
  );
}
