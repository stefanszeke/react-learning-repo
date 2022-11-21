import { useEffect, useState, useRef, useContext} from "react";
import './App.css';
import iconsService from "./components/services/iconService";
import { ThemeContext } from "./components/contexts/ThemeContext";


import Link from './components/Link';
import Button from "./components/Button";
import Button2 from "./components/Button2";
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

  const textInputRef = useRef();

  const buttonsNotHidden = buttons.filter((button) => !button.hidden);
  const buttonList = btnVisibility ? buttons : buttonsNotHidden;

  const themeContext = useContext(ThemeContext);



  useEffect(() => { textInputRef.current.focus() }, [])



  return (
    <div className="App">

          
        <Container >
          <div className="clock-theme-container">
            <Clock />
            <ThemeChanger onThemeChangeClick={handleThemeChangeClick}/>
          </div>

          <Link href="https://stefanszeke.github.io/">stefanszeke.github.io</Link>

          {btnClass}

          <div className="hide-show-buttons">
            <Button2 onButtonClick={ () => setBtnVisibility(true) } > {iconsService.eye} show</Button2>
            <Button2 onButtonClick={ () => setBtnVisibility(false) }> {iconsService.eyeSlash} hide</Button2>
          </div>

          { buttonList.map( (button, index) => ( 
            <Button onButtonClick={handleButtonClick} key={button.id} className={button.classes} visible={button.hidden} onCheckboxChange={() => handleCheckboxCheck(button.id-1)}>
              {button.name}
            </Button>
          ))}

          <Counter />
          <Counter2 />
          <Input inputref={textInputRef} ></Input>

          {/* test */}

          <Scroller />
          
        </Container>

    </div>
  );

  
  function handleThemeChangeClick() {
    themeContext.toggleTheme();
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

