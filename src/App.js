import Image from "./components/Image";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Socials from "./components/Social";
export default function App() {
  return (
    <div class="container">
      <div className="card">
        <Image />
        <Info />
        <About />
        <Interests />
      </div>
      <Socials />
    </div>
  );
}
