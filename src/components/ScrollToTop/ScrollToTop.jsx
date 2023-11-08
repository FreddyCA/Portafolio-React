import { useEffect, useState } from "react";
import styled from "styled-components";
import ArroyImg from "../../assets/icons/arrowTop.png";

const ScrollToTopButtonStyle = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #333;
  color: #ffd700;
  border: 2px solid #ffd700;
  border-radius: 50%;
  background-image: url(${ArroyImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 25px;
  font-size: 30px;
  width: 60px;
  height: 60px;
  z-index: 100;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #4b0082;
  }
  @media screen and (max-width: 576px) {
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
  }
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 250 ? true : false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <ScrollToTopButtonStyle
      onClick={scrollToTop}
      style={{ display: isVisible ? "block" : "none" }}
    ></ScrollToTopButtonStyle>
  );
};
export default ScrollToTop;
