import {useState} from 'react';
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portafolio from "./components/portafolio/Portafolio";
import Works from "./components/works/Works";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/contac/Contact";
import Menu from './components/menu/Menu';
import "./app.scss";


function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro/>
        <Portafolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
