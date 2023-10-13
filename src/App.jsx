import GlobalStyle from "./style/reset"
import AboutMe from "./sections/AboutMe/AboutMe"
import NavBar from "./sections/NavBar/NavBar"

const App = () => {
  return (
    <><GlobalStyle />
    <NavBar></NavBar>
      <AboutMe></AboutMe>
    </>
  )
}

export default App
