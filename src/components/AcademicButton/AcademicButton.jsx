import styled, { css } from "styled-components";
import LogoUmsa from "../../assets/logos/umsalogo.png";
import LogoOne from "../../assets/logos/ONElogo.png";
import LogoAlura from "../../assets/logos/logo-aluraespanhol.svg";
import LogoOP from "../../assets/logos/OPlogo.png";
import LogoLaunch from "../../assets/logos/logoLaunchX.png";

const AcademicButtonContentStyle = styled.div`
  width: 100%;
  /* height: 300px; */
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
`;

const AcademicButtonItemStyle = styled.div`
  min-width: 200px;
  height: 300px;
  border: 2px solid rgba(100, 275, 0, 0.5);
  background-color: rgba(250, 200, 275, 0.7);
  border-end-end-radius: 10px ;
  border-end-start-radius: 10px ;

  cursor: pointer;
`;

const AcademicImgContentStyle = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const AcademicImgStyle = styled.img`
  height: auto;
`;
const AcademicImgMediumStyle = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
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
  border-end-end-radius: 10px ;
  border-end-start-radius: 10px ;
`;

const AcademicText = styled.p`
  width: 100%;
  text-align: center;
  color: var(--color--textoPrincipal);
  font-weight: 700;

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
      <AcademicButtonItemStyle>
        <AcademicImgContentStyle>
          <AcademicImgStyle src={LogoUmsa} alt="LOGO"></AcademicImgStyle>
        </AcademicImgContentStyle>
        <AcademicTextContent>
          <AcademicText>Ingeniería Electrónica</AcademicText>
          <AcademicText $bold>En Curso - UMSA</AcademicText>
        </AcademicTextContent>
      </AcademicButtonItemStyle>

      <AcademicButtonItemStyle>
        <AcademicImgContentStyle>
          <AcademicImgStyle src={LogoOne} alt="LOGO"></AcademicImgStyle>
          <AcademicImgMediumStyle>
            <AcademicImgStyle src={LogoAlura} alt="LOGO"></AcademicImgStyle>
          </AcademicImgMediumStyle>
        </AcademicImgContentStyle>
        <AcademicTextContent>
          <AcademicText>Ingeniería Electrónica</AcademicText>
          <AcademicText $bold>En Curso - UMSA</AcademicText>
        </AcademicTextContent>
      </AcademicButtonItemStyle>
      <AcademicButtonItemStyle>
        <AcademicImgContentStyle>
          <AcademicImgStyle src={LogoOP} alt="LOGO"></AcademicImgStyle>
        </AcademicImgContentStyle>
        <AcademicTextContent>
          <AcademicText>Ingeniería Electrónica</AcademicText>
          <AcademicText $bold>En Curso - UMSA</AcademicText>
        </AcademicTextContent>
      </AcademicButtonItemStyle>
      <AcademicButtonItemStyle>
        <AcademicImgContentStyle>
          <AcademicImgStyle src={LogoLaunch} alt="LOGO"></AcademicImgStyle>
        </AcademicImgContentStyle>
        <AcademicTextContent>
          <AcademicText>Ingeniería Electrónica</AcademicText>
          <AcademicText $bold>En Curso - UMSA</AcademicText>
        </AcademicTextContent>
      </AcademicButtonItemStyle>
    </AcademicButtonContentStyle>
  );
};

export default AcademicButton;
