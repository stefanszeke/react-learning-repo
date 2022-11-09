import Link from './components/Link';
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";
import Counter from "./components/Counter";
import Scroller from "./components/Scroller";


const BUTTONS = [
  { name: "Button 1", classes: "" },
  { name: "Disabled", classes: "disabledBtn" },
  { name: "Click me !", classes: "greenBtn" },
  { name: "Click me !", classes: "violetBtn buttonLargeFont" },
]


export default function App() 
{


  return (
    <div className="App">
      <Container>
        sadasd
        <Link href="https://www.google.com">Google</Link>
        {BUTTONS.map( (button, index) => ( <Button onButtonClick={handleButtonClick} key={index} className={button.classes}> {button.name} </Button> ) )}
        <Counter />
        <Input  ></Input>
        {/* test */}
        <Scroller />
      </Container>
    </div>
  );


  function handleButtonClick(event) {
    console.log(event.target.className);
  }

}

