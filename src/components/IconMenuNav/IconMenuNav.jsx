import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import OpenMenu from "../../assets/icons/menu.svg";
import CloseMenu from "../../assets/icons/menuX.svg";

const IconMenuNavStyle = styled.div`
  display: none;

  @media screen and (max-width: 992px) {
    display: block;
    height: 100px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: end;
    padding-right: 2rem;
    ${(props) =>
      !props.$menuEstado &&
      css`
        background-color: rgb(25, 0, 70);
        border-bottom: 2px solid var(--color--textoPrincipal);
      `}
  }
`;

const IconMenuImgStyle = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const IconMenuNav = ({ toggleMenu, menuEstado }) => {
  return (
    <IconMenuNavStyle $menuEstado={menuEstado}>
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

IconMenuNav.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  menuEstado: PropTypes.bool.isRequired,
};

export default IconMenuNav;
