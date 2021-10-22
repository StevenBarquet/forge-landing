// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ----------------------------------------COMPONENT----------------------------------------
export default function Left(): ReactElement {
  return (
    <Row>
      <Col>
        <section className="services-section-1">
          <h1>
            ¿NECESITAS AYUDA TECNICA?
          </h1>
          <p>
            Soluciona y evita  los Problemas con las asesorias  que en Forge tenemos para ti.
            Por que en Forge nos importas  y nos importa tengas las mejores
            herramientas
          </p>
        </section>
      </Col>
    </Row>
  );
}
