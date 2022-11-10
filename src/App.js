import { useState } from "react";

import Link from './components/Link';
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import Scroller from "./components/Scroller";
import Clock from "./components/Clock";


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

  
  const buttonsNotHidden = buttons.filter((button) => !button.hidden);
  const buttonList = btnVisibility ? buttons : buttonsNotHidden;

  return (
    <div className="App">
      <Container>

        <Clock />
        <Counter2 />

        <Link href="https://stefanszeke.github.io/">stefanszeke.github.io</Link>
        {btnClass}
        <div>
          <button onClick={ () => setBtnVisibility(true) } >show</button>
          <button onClick={ () => setBtnVisibility(false) } >hide</button>
        </div>

        { buttonList.map( (button, index) => ( <Button onButtonClick={handleButtonClick} key={button.id} className={button.classes} visible={button.hidden} onCheckboxChange={() => handleCheckboxCheck(button.id-1)}> {button.name} </Button> ) ) }

        <Counter />
        <Input  ></Input>
        {/* test */}
        <Scroller />
      </Container>
    </div>
  );


  function handleButtonClick(event) {
    console.log(event.target.className);
    setBtnClass(`Button class: ${event.target.className}`);
  }

  function handleCheckboxCheck(index) {
    const newButtons = [...buttons];
    newButtons[index].hidden = !newButtons[index].hidden;
    setButtons(newButtons);
  }

}

