import styled from "styled-components";
import OpenMenu from "../../assets/icons/menu.svg";
import CloseMenu from "../../assets/icons/menuX.svg";

const IconMenuNavStyle = styled.div`
  /* background-color: aquamarine; */

  display: none;
  @media screen and (max-width: 992px) {
    display: block;
    height: 100px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: end;
    padding-right: 2rem;
  }
`;

const IconMenuImgStyle = styled.img`
  /* background-color: bisque; */
  width: 30px;
  height: 30px;
`;

const IconMenuNav = ({ toggleMenu, menuEstado }) => {
  return (
    <IconMenuNavStyle>
      {menuEstado ? (
        <IconMenuImgStyle
          onClick={toggleMenu}
          src={OpenMenu}
          alt="abrir menu"
        ></IconMenuImgStyle>
      ) : (
        <IconMenuImgStyle
          onClick={toggleMenu}
          src={CloseMenu}
          alt="cerrar menu"
        ></IconMenuImgStyle>
      )}
    </IconMenuNavStyle>
  );
};

export default IconMenuNav;
