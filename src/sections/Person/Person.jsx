import styled from "styled-components";
import ContentSections from "../../components/ContentSections/ContentSections";
import Subtitle from "../../components/Subtitle/Subtitle";

const PersonStyle = styled.div`
  background-color: var(--color--fondoPrincipal);
  width: 100%;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 20px rgba(275, 175, 0, 0.4);
  border: 1px solid rgba(275, 175, 0, 0.4);
  @media screen and (max-width: 992px) {
    padding: 1rem;
  }
  @media screen and (max-width: 768px) {
    border-radius: 0;
    margin-top: 1.5rem;
    border: none;
  }
`;

const PersonTextStyle = styled.p`
  color: var(--color--textoPrincipal);
  font-weight: 300;
  margin: 1rem 0;
  font-size: 1.1rem;
  line-height: 1.4rem;
  @media screen and (max-width: 992px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.875rem;
    line-height: 1.2rem;
  }
`;

const Person = () => {
  return (
    <ContentSections>
      <PersonStyle id="sobre_mi">
        <Subtitle bold={true}>Sobre mi</Subtitle>
        <PersonTextStyle>
          Soy de La Paz, Bolivia, en los últimos 2 años llevo aprendiendo de
          manera autodidacta tecnologías para el desarrollo Front End,
          participando en proyecto Oracle ONE en Alura Latam, Launch X
          Latinoamérica, cursos adicionales y finalmente en Open-Bootcam por los
          cual estoy respaldado como Programador Jr y Front End Developer además
          de cursos relacionados con las soft skills, actualmente estoy
          fortaleciendo mis Hards Skills con proyectos propios.
        </PersonTextStyle>

        <PersonTextStyle>
          Desde niño tengo una pasión por el funcionamiento de equipos y
          sistemas electrónicos y es por eso que tengo una formación como
          ingeniero electrónico que aún no pude concluir, pero lo que me dio la
          posibilidad de aprender varios lenguajes de programación y una gran
          capacidad de análisis e interpretación de documentación.
        </PersonTextStyle>

        <PersonTextStyle>
          Me encantan los instrumentos musicales de bronce, principalmente la
          trompeta por el cual forme parte de bandas musicales donde lideré
          secciones por el cual forje el trabajo en equipo, disciplina,
          responsabilidad y comunicación asertiva.
        </PersonTextStyle>
      </PersonStyle>
    </ContentSections>
  );
};

export default Person;
