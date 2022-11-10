import './styles/button.css';
import clsx from "clsx";

export default function Button(props) {
  const { children, className, visible, onButtonClick, onCheckboxChange, ...rest } = props;

  const classes = clsx("ui-button", className);
  return (
      <button onClick={onButtonClick} className={classes} {...rest}>
        {children}
        <div className="hide-checkbox">
          <label htmlFor="checkbox-visible" >hidden</label>
          <input id="checkbox-visible" className="buttonCheckbox" type="checkbox" checked={visible} onChange={onCheckboxChange}/>
        </div>
      </button>
  );
}
