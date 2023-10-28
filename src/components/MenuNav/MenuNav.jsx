import styled, { css, keyframes } from "styled-components";
import IconMenuNav from "../IconMenuNav/IconMenuNav";
import { useState } from "react";

const MenuNavStyle = styled.div`
  width: auto;
  display: flex;
  height: 100%;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: 992px) {
    position: absolute;
    gap: 0;
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
  display: flex;

  @media screen and (max-width: 992px) {
    width: 100%;
    height: 50px;
    justify-content: center;
    border-bottom: 2px solid var(--color--textoPrincipal);

    animation: ${AnimationMenuItem} 0.1s ease-in-out;
    animation-fill-mode: both;
    &:nth-child(2) {
      animation-delay: 0.05s;
      z-index: 20;
    }
    &:nth-child(3) {
      animation-delay: 0.1s;
      z-index: 19;
    }
    &:nth-child(4) {
      animation-delay: 0.15s;
      z-index: 18;
      box-shadow: 5px 10px 15px rgba(275, 275, 275, 0.3);
    }
    &:nth-child(5) {
      animation-delay: 0.2s;
      z-index: 17;
    }
    &:nth-child(6) {
      animation-delay: 0.25s;
      z-index: 16;
    }
    &:nth-child(7) {
      animation-delay: 0.3s;
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
  const data = [
    {"id":"#sobre_mi",
    "text": "Sobre mi"
    },
    {"id":"#skills",
    "text": "Skills"
    },
    {"id":"#hobbies",
    "text": "Hobbies"
    },
    {"id":"#formacion",
    "text": "Formación"
    },
    {"id":"#proyectos",
    "text": "Proyectos"
    },
    {"id":"#contacto",
    "text": "Contacto"
    }
  ];
  const [menuEstado, setMenuEstado] = useState(true);

  const toggleMenu = () => {
    setMenuEstado(!menuEstado);
  };
  return (
    <MenuNavStyle>
      <IconMenuNav
        toggleMenu={toggleMenu}
        menuEstado={menuEstado}
      ></IconMenuNav>
      {data.map((item, index) => (
        <MenuNavItemStyle key={index} $menuEstado={menuEstado}>
          <MenuNavLinkStyle href={item.id}>{item.text}</MenuNavLinkStyle>
        </MenuNavItemStyle>
      ))}
    </MenuNavStyle>
  );
};

export default MenuNav;
