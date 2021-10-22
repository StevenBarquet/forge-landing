// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ----------------------------------------COMPONENT----------------------------------------
export default function Left(): ReactElement {
  return (
    <Row>
      <Col>
        <section className="ecommerce-section-3">
          <h1>
            ¿Por que tener un E- comerce?
          </h1>
          <p>
            El e-commerce cuenta con una serie de ventajas respecto al comercio tradicional:
            <li>Disponibilidad 24 horas durante los 365 días del año para el cliente.</li>
            <li>No existen barreras geográficas para el cliente.</li>
            <li>Ventaja competitiva respecto al comercio tradicional.</li>
            <li>
              Posibilidad de segmentar a los clientes al trabajar
              <br />
              online, mejorando la comunicación y lanzando
              <br />
              campañas especializadas.
            </li>
            <li>
              Extender el alcance de tu negocio a nuevos usuarios,
              <br />
              pero reducirlo respecto a otros.
            </li>
          </p>
        </section>
      </Col>
    </Row>
  );
}
