// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ----------------------------------------COMPONENT----------------------------------------
export default function Left(): ReactElement {
  return (
    <Row>
      <Col>
        <section className="section-2">
          <p>
            Si tienes alguna duda o problema  con el desarrollo de tu pagina
            o simplemente quisieras saber más del tema.
            No dudes en  contactarnos y tomar las asesorias personalizadas que tenemos
            para ti.
          </p>
        </section>
      </Col>
    </Row>
  );
}
