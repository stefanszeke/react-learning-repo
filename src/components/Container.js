import './styles/container.css';
import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default function Container(props) {
  const { children, className, ...rest } = props;

  const themeContext = useContext(ThemeContext);
  const classes = clsx("ui-container", className, `ui-container-${themeContext.theme}`);


  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}