// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ----------------------------------------COMPONENT----------------------------------------
export default function Left(): ReactElement {
  return (
    <Row justify="space-between">
      <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
        <section className="section-3">
          <h1>Ventajas de nuestro servicio de diseño web</h1>
        </section>
      </Col>
      <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
        <section className="section-3-1">
          <li> Mejora la experiencia del usuario</li>
          <li>¡Atrae más visitas!</li>
          <li>Olvidate del trabajo de diseño</li>
          <li>Mejora el posicionamiento SEO</li>
          <li>Simplifica la labor de programación</li>
          <li>Abre las puertas a nuevas innovaciones</li>
          <li>Diseño web único </li>
          <li>Diseño ajustado a tus verdaderas necesidades. </li>
        </section>
      </Col>
    </Row>
  );
}
