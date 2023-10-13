import styled from "styled-components";
import LogoDev from "../../components/LogoDev/LogoDev";

const NavBarStyle = styled.div`
  background-color: yellow;
  height: 80px;
  display: flex;
  justify-content: space-between;
`;

const NavBar = () => {
  return <NavBarStyle>
    <LogoDev></LogoDev>
  </NavBarStyle>;
};

export default NavBar;
