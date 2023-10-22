import styled from "styled-components";
import Subtitle from "../../components/Subtitle/Subtitle";
import IconFooter from "../../assets/svg/github.svg"

const FooterStyle = styled.div`
width: 100%;
height: 150px;
background-color: blue;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const FooterIconContentStyle = styled.div`
width: 200px;
height: 70px;
background-color: red;
display: flex;
justify-content: space-between;
`

const FooterIcon = styled.img`
background-color: yellow;
height: 100%;
`



const Footer = () => {

    return <FooterStyle>
        <Subtitle>Desarrollado por Carlos Ari | 2023</Subtitle>
        <FooterIconContentStyle>
            <FooterIcon src={IconFooter} alt="icon" />
            <FooterIcon src={IconFooter} alt="icon" />
        </FooterIconContentStyle>
    </FooterStyle>
}

export default Footer