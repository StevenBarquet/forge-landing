// ---Dependencys
import { ReactElement } from 'react';
import {
  Row, Col, Button, Badge
} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
// --------------------------------------PROPS-----------------------
// --------------------------------------COMPONENTE-----------------------
export default function SaldoBoton(): ReactElement {
  return (
    <Row justify="space-between">
      <Col className="FormatoDePago">
        <Badge status="success" />
        Formas de pago
      </Col>
      <Col>
        <Button type="primary" icon={<DownloadOutlined />}>Ticket de Pago</Button>
      </Col>
    </Row>
  );
}
