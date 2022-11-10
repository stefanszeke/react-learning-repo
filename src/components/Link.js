import './styles/link.css';
import clsx from "clsx";

export default function Link(props) {
  const { children, className, ...rest } = props;
  const classes = clsx("ui-link", className);
  return (
      <a className={classes} {...rest} target="_blank">
        {children}
      </a>
  );
}
