import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import SpaceBackground from "./components/background/SpaceBackground";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Hobbies from "./components/sections/Hobbies";
import Formation from "./components/sections/Formation";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <SpaceBackground>
        <Navbar />
        <Home />
        <About />
        <Hobbies/>
        <Formation />
        <Projects />
        <Contact/>
        <Footer />
      </SpaceBackground>
    </>
  );
}
export default App;