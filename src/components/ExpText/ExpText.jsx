import styled from "styled-components";
import PropTypes from "prop-types";

const ExpTextStyle = styled.p`
font-size: 1.2rem;
margin-top: 1rem;
font-weight: 300;
color: var(--color--textoPrincipal);
`

const ExpText = ({children}) => {


    return <ExpTextStyle>{children}</ExpTextStyle>
}

ExpText.propTypes = {
    children: PropTypes.node.isRequired,
  };
  

export default ExpText