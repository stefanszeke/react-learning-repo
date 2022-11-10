import './styles/scroller.css';
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Scroller(props) {

  const [scroll, setScroll] = useState(0);
  const { className } = props;
  const classes = clsx("ui-scroller", className);
  

  useEffect(() => {
    window.addEventListener("scroll", handelWindowScroll);
    return function cleanUp() { window.removeEventListener("scroll", handelWindowScroll) };
  }, [scroll])

  return (
    <div className={classes}>
      <p>scroll Y</p>
      <h3>{scroll}</h3>
    </div>
  )

  function handelWindowScroll(event) {
    setScroll(window.scrollY);
  }

}