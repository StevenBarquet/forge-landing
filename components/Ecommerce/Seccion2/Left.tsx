// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ----------------------------------------COMPONENT----------------------------------------
export default function Left(): ReactElement {
  return (
    <Row>
      <Col>
        <section className="ecommerce-section-2">
          <h1>
            ¿Que es un E- comerce?
          </h1>
          <p>
            El e-commerce consiste en la distribución, venta, compra,
            marketing y suministro de información de productos o servicios
            a través de Internet. Originalmente el término se aplicaba a la
            realización de transacciones mediante medios electrónicos,
            como por ejemplo el intercambio electrónico de datos.
          </p>
        </section>
      </Col>
    </Row>
  );
}
