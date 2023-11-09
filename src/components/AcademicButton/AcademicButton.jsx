import styled, { css } from "styled-components";
import data from "../../data";

const AcademicButtonContentStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const AcademicButtonItemStyle = styled.div`
  min-width: 200px;
  height: 300px;
  border: 2px solid rgb(228, 228, 228, 0.8);
  background-color: rgb(228, 228, 228, 0.9);
  border-bottom-right-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    background-color: rgb(228, 228, 228);
    translate: 0 -0.2rem;
    transition: 250ms;
    box-shadow: 0 5px 20px rgba(228, 228, 228, 0.8);
  }
  @media screen and (max-width: 992px) {
    min-width: 150px;
    height: 250px;
    flex-direction: column;
    justify-content: space-between;
    &:hover {
      translate: none;
    }
  }
  @media screen and (max-width: 768px) {
    height: 200px;
    border-radius: 0%;
    border: none;
    &:hover {
      box-shadow: 0 5px 7px rgba(228, 228, 228, 0.8);
    }
  }
`;
const AcademicImgContentStyle = styled.div`
  max-height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    max-height: 60%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;
const AcademicImgStyle = styled.img`
  height: auto;
  @media screen and (max-width: 992px) {
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    width: max-content;
  }
`;
const AcademicImgMediumStyle = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  @media screen and (max-width: 992px) {
    height: 50%;
  }
  @media screen and (max-width: 768px) {
    height: 70%;
  }
`;
const AcademicTextContent = styled.div`
  background-color: slategray;
  height: 30%;
  display: flex;
  padding: 1rem 0 0;
  gap: 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;
  @media screen and (max-width: 768px) {
    height: 40%;
    border-radius: 0;
    padding: 0;
    background-color: rgb(30, 0, 70);
  }
`;

const AcademicText = styled.p`
  width: 100%;
  text-align: center;
  color: var(--color--textoPrincipal);
  font-weight: 700;
  font-size: 0.975rem;
  ${(props) =>
    props.$bold &&
    css`
      font-weight: 300;
      font-size: 0.85rem;
    `}
`;

const AcademicButton = () => {
  return (
    <AcademicButtonContentStyle>
      {data.academic.map((item, index) => (
        <AcademicButtonItemStyle key={index}>
          {index !== 1 ? (
            <>
              <AcademicImgContentStyle>
                <AcademicImgStyle
                  src={item.img}
                  alt={item.alt}
                ></AcademicImgStyle>
              </AcademicImgContentStyle>
              <AcademicTextContent>
                <AcademicText>{item.title}</AcademicText>
                <AcademicText $bold>{item.status}</AcademicText>
              </AcademicTextContent>
            </>
          ) : (
            <>
              <AcademicImgContentStyle>
                <AcademicImgStyle
                  src={item.img}
                  alt={item.alt}
                ></AcademicImgStyle>
                <AcademicImgMediumStyle>
                  <AcademicImgStyle
                    src={item.img2}
                    alt={item.alt2}
                  ></AcademicImgStyle>
                </AcademicImgMediumStyle>
              </AcademicImgContentStyle>
              <AcademicTextContent>
                <AcademicText>{item.title}</AcademicText>
                <AcademicText $bold>{item.status}</AcademicText>
              </AcademicTextContent>
            </>
          )}
        </AcademicButtonItemStyle>
      ))}
    </AcademicButtonContentStyle>
  );
};

export default AcademicButton;
