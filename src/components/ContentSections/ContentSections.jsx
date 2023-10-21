import styled from "styled-components";
import PropTypes from "prop-types";

const ContentSectionsStyle = styled.div`
  width: 992px;
  display: flex;
  margin: 1.5rem auto;
  padding: 2rem;

  @media screen and (max-width: 992px) {
    width: auto;
  }
`;

const ContentSections = ({ children }) => {
  return <ContentSectionsStyle>{children}</ContentSectionsStyle>;
};

ContentSections.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentSections;
