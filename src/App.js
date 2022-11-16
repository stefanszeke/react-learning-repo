import { useEffect, useState } from "react";
import './App.css';

import Link from './components/Link';
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import Scroller from "./components/Scroller";
import Clock from "./components/Clock";
import ThemeChanger from "./components/ThemeChanger";


const BUTTONSDATA = [
  { id: 1,name: "Button 1", classes: "", hidden: false },
  { id: 2,name: "Disabled", classes: "disabledBtn", hidden: true  },
  { id: 3,name: "Click me !", classes: "greenBtn", hidden: false  },
  { id: 4,name: "Click me !", classes: "violetBtn buttonLargeFont", hidden: false  },
  { id: 5,name: "weeee", classes: "violetBtn", hidden: true  },
]


export default function App() 
{
  const [btnClass, setBtnClass] = useState("Button class: no class");
  const [buttons, setButtons] = useState(BUTTONSDATA);
  const [btnVisibility, setBtnVisibility] = useState(false);

  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  const buttonsNotHidden = buttons.filter((button) => !button.hidden);
  const buttonList = btnVisibility ? buttons : buttonsNotHidden;


  useEffect(() => {
    if(localStorage.getItem("theme") === "dark") { document.body.classList.add("body-dark")}
  }, [])

  useEffect(() => {
      if(theme === "light") { document.body.classList.remove("body-dark") }
      else { document.body.classList.add("body-dark") }
      localStorage.setItem("theme", theme)
  },[theme])


  return (
    <div className="App">
      <Container theme={theme}>

        <div className="clock-theme-container">
          <Clock theme={theme}/>
          <ThemeChanger theme={theme} onThemeChangeClick={handleThemeChangeClick}/>
        </div>

        <Link href="https://stefanszeke.github.io/">stefanszeke.github.io</Link>
        {btnClass}
        <div>
          <button onClick={ () => setBtnVisibility(true) } >show</button>
          <button onClick={ () => setBtnVisibility(false) } >hide</button>
        </div>

        { buttonList.map( (button, index) => ( 
          <Button onButtonClick={handleButtonClick} theme={theme} key={button.id} className={button.classes} visible={button.hidden} onCheckboxChange={() => handleCheckboxCheck(button.id-1)}>
             {button.name}
          </Button>
         ))}

        <Counter theme={theme}/>
        <Counter2 theme={theme}/>
        <Input  theme={theme}></Input>
        {/* test */}
        <Scroller theme={theme}/>
      </Container>
    </div>
  );

  
  function handleThemeChangeClick() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  function handleButtonClick(event) {
    setBtnClass(`Button class: ${event.target.className}`);
  }

  function handleCheckboxCheck(index) {
    const newButtons = [...buttons];
    newButtons[index].hidden = !newButtons[index].hidden;
    setButtons(newButtons);
  }

}

