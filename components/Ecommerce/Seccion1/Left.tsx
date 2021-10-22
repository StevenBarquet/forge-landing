// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ----------------------------------------COMPONENT----------------------------------------
export default function Left(): ReactElement {
  return (
    <Row justify="center">
      <Col>
        <section className="ecommerce-section-1">
          <h1>
            E-commerce
          </h1>
          <p>
            La mejor opcion para un joven
            <br />
            emprendedor
          </p>
        </section>
      </Col>
    </Row>
  );
}
