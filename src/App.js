import './App.css'
import { Route, Routes, Link, } from 'react-router-dom'
import Main from "./pages/Main";
import App2 from "./pages/App2";
import ThemeChanger from "./components/ThemeChanger";

const url = 'react-learning-repo'

export default function App() {
  return (<>
  <nav>
  <ThemeChanger />
    <Link to={`${url}/`}>Main</Link>
    <Link to={`${url}/app2`}>App2</Link>
  </nav>

  <Routes>
    <Route path={`${url}/`} element={<Main />} />
    <Route path={`${url}/app2`} element={<App2 />} />
  </Routes>
  </>);
}

