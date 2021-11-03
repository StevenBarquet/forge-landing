// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
import Botoncitos from 'Comp/Services/SectionGrid/SectionGridBoton';
// ----------------------------------------COMPONENT----------------------------------------
export default function Left(): ReactElement {
  return (
    <Row>
      <Col>
        <section className="section-1">
          <h2>
            ¿Te gustaría saber más sobre como Construir tu propia pagina web?
          </h2>
          <p>
            <strong> NOSOTROS TE ENSEÑAMOS </strong>
            , toma nuestro
            <strong> GRANDIOSOS CURSOS ONLINE </strong>
            y vuelvete un
            <strong> EXPERTO </strong>
            en el tema.
          </p>
          <Botoncitos namebutton="Solicitar informes" />
        </section>
      </Col>
    </Row>
  );
}
