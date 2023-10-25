import GlobalStyle from "./style/reset";
import AboutMe from "./sections/AboutMe/AboutMe";
import NavBar from "./sections/NavBar/NavBar";
import Person from "./sections/Person/Person";
import Skills from "./sections/Skills/Skills";
import Hobbies from "./sections/Hobbies/Hobbies";
import Academic from "./sections/Academic/Academic";
import ExpProf from "./sections/ExpProf/ExpProf";
import Footer from "./sections/Footer/Footer";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar></NavBar>
      <AboutMe></AboutMe>
      <Person></Person>
      <Skills></Skills>
      <Hobbies></Hobbies>
      <Academic />
      <ExpProf></ExpProf>


      <Footer></Footer>
    </>
  );
};

export default App;
