import GlobalStyle from "./style/reset";
import AboutMe from "./sections/AboutMe/AboutMe";
import NavBar from "./sections/NavBar/NavBar";
import Person from "./sections/Person/Person";
import Skills from "./sections/Skills/Skills";
import Hobbies from "./sections/Hobbies/Hobbies";
import Academic from "./sections/Academic/Academic";
import ExpProf from "./sections/ExpProf/ExpProf";
import Footer from "./sections/Footer/Footer";
import Contact from "./sections/Contact/Contact";
import { useEffect, useState } from "react";

const App = () => {

  const [desktop, setDesktop] = useState(null)
  useEffect(() => {
    const handleResize = () => {
      const newWith = window.innerWidth
      if (newWith>992) {
        setDesktop(true)
      } else {
        setDesktop(false)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      <GlobalStyle />
      {desktop !== null && <NavBar desktop={desktop}></NavBar>}
      <AboutMe></AboutMe>
      <Person />
      <Skills />
      <Hobbies />
      <Academic />
      <ExpProf />
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default App;
