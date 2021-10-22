// ---Dependencys
import { ReactElement } from 'react';
import {
  Row, Col
} from 'antd';
// --------------------------------------PROPS-----------------------
// --------------------------------------COMPONENTE-----------------------

export default function SaldoFooter(): ReactElement {
  return (
    <Row justify="end">
      <Col className="saldo-footer">
        <img src="/images/footer/Paypal.jpeg" alt="Shelly" width="30%" />
        <img src="/images/footer/Mercadolibre.jpeg" alt="Shelly" width="30%" />
        <br />
        Realiza tus pagos online de manera facil y rapida,
      </Col>
    </Row>
  );
}
