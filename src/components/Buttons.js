import './styles/buttons/buttonCheckBox.css';
import './styles/buttons/buttonRounded.css';
import './styles/buttons/buttonDefault.css';
import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

const Buttons = {

  Default: function DefaultButton(props) {
    const { className, ...rest } = props;
    const themeContext = useContext(ThemeContext);
    const classes = clsx("ui-button-default", className, `ui-button-default-${themeContext.theme}`);
    return (
      <button onClick={props.onButtonClick} className={classes} {...rest}>
        {props.children}
      </button>
    );
  },

  CheckBox: function Button(props) {
    const { children, className, visible, onButtonClick, onCheckboxChange, checkName, ...rest } = props;
  
    const themeContext = useContext(ThemeContext);
    const classes = clsx("ui-button", className, `ui-button-${themeContext.theme}`);
    
    return (
        <button onClick={onButtonClick} className={classes} {...rest}>
          {children}
          <div className="hide-checkbox">
            <label htmlFor="checkbox-visible" >{checkName}</label>
            <input id="checkbox-visible" className="buttonCheckbox" type="checkbox" checked={visible} onChange={onCheckboxChange}/>
          </div>
        </button>
    );
  },

  Rounded: function Button2(props) {

    const themeContext = useContext(ThemeContext);
    const classes = clsx("ui-button2", `ui-button2-${themeContext.theme}`);
  
    return (
      <button onClick={props.onButtonClick} className={classes} {...props}>
        {props.children}
      </button>
    );
  }

}

export default Buttons;