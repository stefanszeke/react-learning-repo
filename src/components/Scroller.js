import './styles/scroller.css';
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default function Scroller(props) {
  const [scroll, setScroll] = useState(0);

  const themeContext = useContext(ThemeContext);
  const classes = clsx("ui-scroller", props.className, `ui-scroller-${themeContext.theme}`);

  useEffect(() => {
    window.addEventListener("scroll", handelWindowScroll);
    return function cleanUp() { window.removeEventListener("scroll", handelWindowScroll) };
  }, [scroll])

  return (
    <div className={classes}>
      <p>scroll Y</p>
      <h3>{scroll.toFixed(0)}</h3>
    </div>
  )

  function handelWindowScroll(event) {
    setScroll(window.scrollY);
  }

}