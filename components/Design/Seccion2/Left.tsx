// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ----------------------------------------COMPONENT----------------------------------------
export default function Left(): ReactElement {
  return (
    <Row>
      <Col>
        <section className="section-2">
          <h1>Diseño web</h1>
          <p>
            El diseño web es un elemento muy importante. Esto se debe a que es
            necesario que los usuarios se sientan de forma comoda y con
            confianza al entrar, en el que pueda navegar de forma cómoda, rápida
            y segura, evitando cualquier problema.
          </p>
          <p>
            Es por este motivo que en Forge te otorgamos la opción de contactar
            un diseñador especializado en el tema, el cual te ayudara a sacar el
            maximo potencial a tu proyecto de forma total mente personalizada y
            adecuada a tú proyecto, tus usuarios y a ti.
          </p>
        </section>
      </Col>
    </Row>
  );
}
