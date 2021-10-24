// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ----------------------------------------COMPONENT----------------------------------------
export default function Left(): ReactElement {
  return (
    <Row>
      <Col>
        <section className="section-5">
          <h1>Desarrollo web a tú medida</h1>
          <p>
            No te preocupes y deja que nuestros expertos te den un grandioso
            servicio tecnico completamente personalizado, para ti.
          </p>
        </section>
      </Col>
    </Row>
  );
}
