import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonStyle = styled.a`
  color: var(--color--textoPrincipal);
  width: 150px;
  text-decoration: none;
  border: 1px solid var(--color--resaltador);
  padding: 1rem 0;
  display: flex;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  gap: 0.2rem;
  cursor: pointer;
  &:hover {
    background-color: var(--color--fondoHover);
    color: var(--color--resaltador);
    box-shadow: 5px px 15px rgba(275, 275, 275, 0.2);
  }
`;

const Button = ({children, href}) => {
  return <ButtonStyle href={href} target="_blank" rel="noopener noreferrer">{children}</ButtonStyle>;
};


Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

export default Button;
