import styled from "styled-components";
import PropTypes from "prop-types";


const SubtitleStyle = styled.h3`
    font-size: 2.2rem;
    font-weight: 400;
    color: var(--color--textoPrincipal);
`

const Subtitle = ({children}) => {
    return <SubtitleStyle>{children}</SubtitleStyle>
}

Subtitle.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default Subtitle