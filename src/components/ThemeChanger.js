import './styles/themeChanger.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'


export default function ThemeChanger(props) {

  const faMoonIcon = <FontAwesomeIcon icon={faMoon} />
  const faSunIcon = <FontAwesomeIcon icon={faSun} />

  
  let themeIcon = props.theme === 'light' ? faMoonIcon : faSunIcon; 
  let classes = props.theme === 'dark' ? 'ui-theme-changer_button lightButton' : 'ui-theme-changer_button darkButton';



  return (
    <div className="ui-theme-changer">
      <button className={classes} onClick={props.onThemeChangeClick} > {themeIcon} </button>
    </div>
  )

}