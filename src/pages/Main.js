import { useEffect, useState, useRef } from "react";
import './Main.css';
import iconsService from "../components/services/iconService";

import MyLink from '../components/MyLink';
import Buttons from "../components/Buttons";
import Container from "../components/Container";
import Input from "../components/Input";
import Counter from "../components/Counter";
import Counter2 from "../components/Counter2";
import Scroller from "../components/Scroller";
import Clock from "../components/Clock";



const BUTTONSDATA = [
  { id: 1,name: "Button 1", classes: "", hidden: false },
  { id: 2,name: "Disabled", classes: "disabledBtn", hidden: true  },
  { id: 3,name: "Click me !", classes: "greenBtn", hidden: false  },
  { id: 4,name: "Click me !", classes: "violetBtn buttonLargeFont", hidden: false  },
  { id: 5,name: "weeee", classes: "violetBtn", hidden: true  },
]


export default function Main() 
{
  const [btnClass, setBtnClass] = useState("Button class: no class");
  const [buttons, setButtons] = useState(BUTTONSDATA);
  const [btnVisibility, setBtnVisibility] = useState(false);

  const textInputRef = useRef();

  const buttonsNotHidden = buttons.filter((button) => !button.hidden);
  const buttonList = btnVisibility ? buttons : buttonsNotHidden;


  useEffect(() => { textInputRef.current.focus() }, [])


  return (
    <div className="App">

          
        <Container >
          <div className="clock-theme-container">
            <Clock />
          </div>

          <MyLink href="https://stefanszeke.github.io/">stefanszeke.github.io</MyLink>

          {btnClass}

          <div className="hide-show-buttons">
            <Buttons.Rounded onButtonClick={ () => setBtnVisibility(true) } > {iconsService.eye} show</Buttons.Rounded>
            <Buttons.Rounded onButtonClick={ () => setBtnVisibility(false) }> {iconsService.eyeSlash} hide</Buttons.Rounded>
          </div>

          { buttonList.map( (button, index) => ( 
            <Buttons.CheckBox checkName='hidden ' onButtonClick={handleButtonClick} key={button.id} className={button.classes} visible={button.hidden} onCheckboxChange={() => handleCheckboxCheck(button.id-1)}>
              {button.name}
            </Buttons.CheckBox>
          ))}

          <Counter />
          <Counter2 />
          <Input inputref={textInputRef} ></Input>

          {/* test */}
          <Scroller />
          
        </Container>

    </div>
  );

  

  function handleButtonClick(event) {
    setBtnClass(`Button class: ${event.target.className}`);
  }

  function handleCheckboxCheck(index) {
    const newButtons = [...buttons];
    newButtons[index].hidden = !newButtons[index].hidden;
    setButtons(newButtons);
  }

}

