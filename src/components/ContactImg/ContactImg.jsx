import styled from "styled-components";
import ImgContact from "../../assets/contacto.png"

const ContactImgContentStyle = styled.div`
height: 100%;
width: 45%;
background-color: blue;
`
const ContactImgStyle = styled.img`
display: flex;
height: 100%;
`

const ContactImg = () => {

    return <ContactImgContentStyle>
        <ContactImgStyle src={ImgContact} alt="contacto"></ContactImgStyle>
    </ContactImgContentStyle>
}

export default ContactImg