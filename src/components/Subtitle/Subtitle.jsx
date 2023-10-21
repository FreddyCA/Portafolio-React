import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const SubtitleStyle = styled.h3`
  font-size: 2.2rem;
  font-weight: 400;
  color: var(--color--textoPrincipal);
  ${(props) =>
    props.$bold &&
    css`
      font-weight: 700;
    `}
`;

const Subtitle = ({ children, bold }) => {
  return <SubtitleStyle $bold={bold}>{children}</SubtitleStyle>;
};

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool,
};

export default Subtitle;
