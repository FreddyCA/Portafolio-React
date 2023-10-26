import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonStyle = styled.a`
  color: white;
  width: 150px;
  border: 1px solid var(--color--resaltador);
  padding: 1rem 0;
  display: flex;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: var(--color--fondoHover);
    color: var(--color--resaltador);
    box-shadow: 5px px 15px rgba(275, 275, 275, 0.2);
  }
`;

const Button = ({children}) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};


Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
