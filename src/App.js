import Toggler from "./components/Toggler";
import Image from "./components/Image";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Socials from "./components/Social";
import { useState } from "react";
export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  function modeToggler() {
    setDarkMode((prevMode) => !prevMode);
  }
  return (
    <div className={darkMode ? "container" : "container light"}>
      <Toggler darkMode={darkMode} clickHandler={modeToggler} />
      <div className={darkMode ? "card" : "card light"}>
        <Image />
        <Info darkMode={darkMode} />
        <About />
        <Interests />
      </div>
      <Socials darkMode={darkMode} />
    </div>
  );
}
