import styled from "styled-components";
import PropTypes from "prop-types";

const ExpTextStyle = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;
  font-weight: 300;
  color: var(--color--textoPrincipal);
  @media screen and (max-width: 992px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    margin-top: 0.8rem;
  }
`;

const ExpText = ({ children }) => {
  return <ExpTextStyle>{children}</ExpTextStyle>;
};

ExpText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ExpText;
