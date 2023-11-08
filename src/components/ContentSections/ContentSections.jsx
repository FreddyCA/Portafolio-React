import styled from "styled-components";
import PropTypes from "prop-types";

const ContentSectionsStyle = styled.div`
  max-width: 992px;
  display: flex;
  margin: 1.5rem auto;
  padding: 2rem;

  @media screen and (max-width: 992px) {
    width: auto;
    padding: 1rem;
    margin: 0;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const ContentSections = ({ children }) => {
  return <ContentSectionsStyle>{children}</ContentSectionsStyle>;
};

ContentSections.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentSections;
