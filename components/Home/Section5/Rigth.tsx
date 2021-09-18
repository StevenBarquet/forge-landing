// ---Dependencys
import { ReactElement } from 'react';
// ---Components
import { Button, Row, Col } from 'antd';

// ----------------------------------------COMPONENT----------------------------------------
export default function Rigth(): ReactElement {
  return (
    <>
      <section className="section-3-1">
        <p>
          <h2>NO TE PIERDAS</h2>
          {' '}
          <h3>DE LOS</h3>
          {' '}
          <h1>
            ¡GRANDES DESCUENTOS!
          </h1>
          {' '}
          <h3>QUE TENEMOS</h3>
          {' '}
          <h2>PARA TI </h2>
        </p>
        <Row justify="center">
          <Col span={20}>
            <Button block type="primary">Saber más</Button>
          </Col>
        </Row>
      </section>
    </>
  );
}
