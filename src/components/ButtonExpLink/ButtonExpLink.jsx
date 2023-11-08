import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const ButtonExpLinkContentStyle = styled.div`
  display: flex;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  justify-content: start;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    justify-content: center;
    gap: 2rem;
    margin-top: 0.8rem;
  }
  @media screen and (max-width: 576px) {
    gap: 0.5rem;
  }
`;

const ButtonExpLinkStyle = styled.a`
  text-decoration: none;
  color: white;
  width: 150px;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  cursor: pointer;
  transition: all 300ms ease;
  background-color: rgb(34, 54, 135);
  border: 1px solid transparent;

  &:hover {
    background-color: rgb(34, 54, 135, 0.8);
    color: var(--color--textoPrincipal);
    border: 1px solid var(--color--textoPrincipal);
    box-shadow: 0px 2px 8px rgba(228, 228, 228, 0.5);
  }
  @media screen and (max-width: 992px) {
    width: 80%;
    font-size: 0.9rem;
  }
  @media screen and (max-width: 768px) {
    width: 175px;
  }
  ${(props) =>
    props.$demo &&
    css`
      background-color: rgb(80, 45, 0);
      &:hover {
        background-color: rgb(80, 45, 0, 0.7);
      }
    `}
`;

const ButtonExpLink = ({ repoLink, demoLink }) => {
  return (
    <ButtonExpLinkContentStyle>
      <ButtonExpLinkStyle
        href={repoLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Repositorio
      </ButtonExpLinkStyle>
      <ButtonExpLinkStyle
        href={demoLink}
        target="_blank"
        rel="noopener noreferrer"
        $demo
      >
        Demo
      </ButtonExpLinkStyle>
    </ButtonExpLinkContentStyle>
  );
};

ButtonExpLink.propTypes = {
  repoLink: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
};

export default ButtonExpLink;
