import './styles/themeChanger.css';
import iconsService from "./services/iconService";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default function ThemeChanger(props) {

  const themeContext = useContext(ThemeContext);
  let themeIcon = themeContext.theme === 'light' ? iconsService.moon : iconsService.sun; 
  let classes = themeContext.theme === 'light' ? 'ui-theme-changer_button darkButton' : 'ui-theme-changer_button lightButton';

  return (
    <div className="ui-theme-changer">
      <button className={classes} onClick={props.onThemeChangeClick} > {themeIcon} </button>
      <p>(useContext)</p>
    </div>
  )

}