import styled from "styled-components";
import LogoDev from "../../components/LogoDev/LogoDev";
import MenuNav from "../../components/MenuNav/MenuNav";

const NavBarStyle = styled.div`
  background-color: #121212;
  border-bottom: 2px solid var(--color--textoPrincipal);
  height: 100px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavBar = () => {
  return (
    <NavBarStyle>
      <LogoDev></LogoDev>
      <MenuNav></MenuNav>
    </NavBarStyle>
  );
};

export default NavBar;
