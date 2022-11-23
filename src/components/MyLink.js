import './styles/link.css';
import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default function MyLink(props) {
  const { children, className, ...rest } = props;

  const themeContext = useContext(ThemeContext);
  const classes = clsx("ui-link", className, `ui-link-${themeContext.theme}`);
  return (
      <a className={classes} {...rest} target="_blank">
        {children}
      </a>
  );
}
