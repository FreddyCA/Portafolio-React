import styled, { css, keyframes } from "styled-components";
import IconMenuNav from "../IconMenuNav/IconMenuNav";
import { useState } from "react";

const MenuNavStyle = styled.div`
  /* background-color: brown; */
  width: auto;
  display: flex;
  height: 100%;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: 992px) {
    position: absolute;
    gap: 0;
    /* background-color: yellow; */
    right: 0;
    top: 0;
    width: 300px;
    height: auto;
    flex-direction: column;
  }
`;
const AnimationMenuItem = keyframes`
0% {
    opacity: 0;
    transform: translateY(-10px);
}
100% {
    opacity: 1;
    transform: translateY(0);
}
`;

const MenuNavItemStyle = styled.div`
  /* background-color: blue; */
  display: flex;

  @media screen and (max-width: 992px) {
    width: 100%;
    height: 50px;
    justify-content: center;
    border-bottom: 2px solid var(--color--textoPrincipal);

    animation: ${AnimationMenuItem} 0.2s ease-in-out;
    animation-fill-mode: both;
    /* &:nth-child(1) {
      animation-delay: 0.01s;
    } */
    &:nth-child(2) {
      animation-delay: 0.15s;
      z-index: 20;
    }
    &:nth-child(3) {
      animation-delay: 0.3s;
      z-index: 19;
    }
    &:nth-child(4) {
      animation-delay: 0.45s;
      z-index: 18;
      box-shadow: 5px 10px 15px rgba(275, 275, 275, 0.3);
    }
    &:nth-child(5) {
      animation-delay: 0.60s;
      z-index: 17;
    }
    &:nth-child(6) {
      animation-delay: 0.75s;
      z-index: 16;
    }
    &:nth-child(7) {
      animation-delay: 0.9s;
      z-index: 15;
      box-shadow: 5px 10px 15px rgba(275, 275, 275, 0.3);
    }

    ${(props) =>
      props.$menuEstado &&
      css`
        display: none;
      `}
  }
`;

const MenuNavLinkStyle = styled.a`
  /* background-color: beige; */
  text-decoration: none;
  cursor: pointer;
  padding: 1rem;
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--color--textoPrincipal);
  white-space: nowrap;

  position: relative;
  overflow: hidden;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 0;
    /* height: 2.5px; */
    left: 50%;
    background-color: var(--color--resaltador);
    transition: width 0.4s ease;
  }
  &::before {
    top: 0;
    transform: translateX(-50%);
    height: 4px;
  }
  &::after {
    bottom: 0;
    transform: translateX(-50%);
    height: 4px;
  }
  &:hover::before,
  &:hover::after {
    width: 100%;
  }
  &:hover {
    background-color: transparent;
    color: var(--color--resaltador);
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    display: flex;
    justify-content: center;
    font-weight: 400;
    background-color: var(--color--fondoHover);
    &:hover {
      background-color: var(--color--fondoPrincipal);
      color: var(--color--resaltador);
    }
    &::before {
      top: 0;
      transform: translateX(-50%);
      height: 2px;
    }
    &::after {
      bottom: 0;
      transform: translateX(-50%);
      height: 2px;
    }
  }
`;

const MenuNav = () => {
  const [menuEstado, setMenuEstado] = useState(true);
  console.log(menuEstado);

  const toggleMenu = () => {
    setMenuEstado(!menuEstado);
  };
  return (
    <MenuNavStyle>
      <IconMenuNav
        toggleMenu={toggleMenu}
        menuEstado={menuEstado}
      ></IconMenuNav>
      <MenuNavItemStyle $menuEstado={menuEstado}>
        <MenuNavLinkStyle>Aaa</MenuNavLinkStyle>
      </MenuNavItemStyle>
      <MenuNavItemStyle $menuEstado={menuEstado}>
        <MenuNavLinkStyle>Bbb</MenuNavLinkStyle>
      </MenuNavItemStyle>
      <MenuNavItemStyle $menuEstado={menuEstado}>
        <MenuNavLinkStyle>Ccc</MenuNavLinkStyle>
      </MenuNavItemStyle>
      <MenuNavItemStyle $menuEstado={menuEstado}>
        <MenuNavLinkStyle>Aaa</MenuNavLinkStyle>
      </MenuNavItemStyle>
      <MenuNavItemStyle $menuEstado={menuEstado}>
        <MenuNavLinkStyle>Bbb</MenuNavLinkStyle>
      </MenuNavItemStyle>
      <MenuNavItemStyle $menuEstado={menuEstado}>
        <MenuNavLinkStyle>Ccc</MenuNavLinkStyle>
      </MenuNavItemStyle>
    </MenuNavStyle>
  );
};

export default MenuNav;
