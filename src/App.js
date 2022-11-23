import { Route, Routes, Link, } from 'react-router-dom'
import Main from "./pages/Main";
import App2 from "./pages/App2";


export default function App() {
  return (<>
  <nav>
    <Link to="/">Main</Link>
    <Link to="/app2">App2</Link>
  </nav>

  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/app2" element={<App2 />} />
  </Routes>
  </>);
}

