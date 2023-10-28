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

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar></NavBar>
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
