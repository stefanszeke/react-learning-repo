import './styles/themeChanger.css';
import iconsService from "./services/iconService";


export default function ThemeChanger(props) {

  let themeIcon = props.theme === 'light' ? iconsService.moon : iconsService.sun; 
  let classes = props.theme === 'dark' ? 'ui-theme-changer_button lightButton' : 'ui-theme-changer_button darkButton';

  return (
    <div className="ui-theme-changer">
      <button className={classes} onClick={props.onThemeChangeClick} > {themeIcon} </button>
      <p>(useContext)</p>
    </div>
  )

}