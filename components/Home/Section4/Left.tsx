// ---Dependencys
import { ReactElement } from 'react';
// ---Components
import { Button, Row, Col } from 'antd';

// ----------------------------------------COMPONENT----------------------------------------
export default function Left(): ReactElement {
  return (
    <>
      <section className="section-3-1">
        <p>
          <h3>Olvidate del</h3>
          {' '}
          <h2>diseño, hosting, servidores, SSL</h2>
          {' '}
          <h3>, etc.</h3>
          {'\n'}
          <h1>¡EXPERTOS</h1>
          {' '}
          <h2>en soluciones, no en</h2>
          {' '}
          <h1>EXCUSAS!</h1>
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
