import styled from "styled-components";

const NameStyle = styled.h2`
    font-size: 3.375rem;
    margin-bottom: 0.5rem;
    color: var(--color--textoPrincipal);
  @media screen and (max-width: 992px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 2.275rem;
  }
  @media screen and (max-width: 630px) {
    font-size: 2rem;
    margin-top: 0.5rem;
  }
`

const Name = () => {

    return <NameStyle>Carlos Ari</NameStyle>
}

export default Name