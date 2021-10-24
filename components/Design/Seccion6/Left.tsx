// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
import Botoncitos from 'Comp/Services/SectionGrid/SectionGridBoton';
// ----------------------------------------COMPONENT----------------------------------------
export default function Left(): ReactElement {
  return (
    <Row>
      <Col>
        <section className="section-6">
          <h3>¿Por que es mejor tener un desarrollo a mi medida?</h3>
          <h2>¡SIN LIMITES!</h2>
          <p>
            Obten la pagina de tus sueños, sin limitantes visuales, tecnicas o
            de algun otro tipo. Ten la pagina que tanto deseas, con todo lo que
            necesitas y siempre imaginaste. Y lo mejor, sin necesidad de un
            equipo de desarrollo web.
          </p>
          <h1>Contactanos, cuentanos tu idea y nosotros la hacemos realidad.</h1>
          <Botoncitos namebutton="Contactar" />
        </section>
      </Col>
    </Row>
  );
}
