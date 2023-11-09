import GlobalStyle from "./style/reset";
import { useEffect, useState } from "react";
import AboutMe from "./sections/AboutMe/AboutMe";
import NavBar from "./sections/NavBar/NavBar";
import Person from "./sections/Person/Person";
import Skills from "./sections/Skills/Skills";
import Hobbies from "./sections/Hobbies/Hobbies";
import Academic from "./sections/Academic/Academic";
import ExpProf from "./sections/ExpProf/ExpProf";
import Footer from "./sections/Footer/Footer";
import Contact from "./sections/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import data from "./data";

const App = () => {
  const [desktop, setDesktop] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      const newWith = window.innerWidth;
      if (newWith > 992) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <ScrollToTop></ScrollToTop>
      {desktop !== null && <NavBar desktop={desktop}></NavBar>}
      <AboutMe dataAboutMe={data.aboutMe}></AboutMe>
      <Person dataPerson={data.person} />
      <Skills dataHardSkill={data.hardSkills} dataSoftSkill={data.softSkills} />
      <Hobbies dataHobbie={data.hobbies} />
      <Academic dataAcademic={data.academic} />
      <ExpProf dataExpProf={data.experience} />
      {/* mejorar el componente boton de envio */}
      <Contact />
      <Footer></Footer>
    </>
  );
};

export default App;
