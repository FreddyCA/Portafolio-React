import styled from "styled-components";
import LogoFC from '../../assets/logo-fc.png'

const LogoDevContentStyle = styled.div`
    height: 70px;
    width: auto;
    background-color: orange;
`;

const LogoDevImg = styled.img`
    height: 100%;
`;

const LogoDev = () => {
  return <LogoDevContentStyle>
  <LogoDevImg src={LogoFC} alt="Logo FC"></LogoDevImg>
  </LogoDevContentStyle>
};

export default LogoDev;
