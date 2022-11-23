import './App.css'
import { Route, Routes, Link, } from 'react-router-dom'
import Main from "./pages/Main";
import App2 from "./pages/App2";
import ThemeChanger from "./components/ThemeChanger";


export default function App() {
  return (<>
  <nav>
  <ThemeChanger />
    <Link to="react-learning-repo/">Main</Link>
    <Link to="react-learning-repo/app2">App2</Link>
  </nav>

  <Routes>
    <Route path="react-learning-repo/" element={<Main />} />
    <Route path="react-learning-repo/app2" element={<App2 />} />
  </Routes>
  </>);
}

