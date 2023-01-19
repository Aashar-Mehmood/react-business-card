import Toggler from "./components/Toggler";
import Image from "./components/Image";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Socials from "./components/Social";
import { useState } from "react";
export default function App() {
  const [colorMode, setColorMode] = useState("dark");
  function modeToggler() {
    setColorMode((prevMode) => {
      return prevMode === "dark" ? "light" : "dark";
    });
  }
  console.log(colorMode);
  return (
    <div className={colorMode === "dark" ? "container" : "container light"}>
      <Toggler color={colorMode} clickHandler={modeToggler} />
      <div className={colorMode === "dark" ? "card" : "card light"}>
        <Image />
        <Info color={colorMode} />
        <About />
        <Interests />
      </div>
      <Socials color={colorMode} />
    </div>
  );
}
