// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ----------------------------------------COMPONENT----------------------------------------
export default function Left(): ReactElement {
  return (
    <Row>
      <Col>
        <section className="section-1">
          <h1>Servicio de Diseño y Desarrollo web a tú medida</h1>
          <p>
            No te quiebres la cabeza y deja que nuestros expertos sé hagan cargo
            del aspecto visual y técnico de tú proyecto, creando una plataforma
            única,adaptada a ti, a tus gustos y a las necesidades de tu
            proyecto.
          </p>
        </section>
      </Col>
    </Row>
  );
}
