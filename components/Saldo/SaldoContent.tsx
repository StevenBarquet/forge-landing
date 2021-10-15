// ---Dependencys
import { ReactElement } from 'react';
import {
  Row, Col, Button, Badge
} from 'antd';
import CountDown from 'CComps/InDevPage/CountDown';
import { DownloadOutlined } from '@ant-design/icons';

const finishDate = new Date('October 9, 2021 03:24:00');
// --------------------------------------PROPS-----------------------
// --------------------------------------COMPONENTE-----------------------
export default function SaldoContent(): ReactElement {
  return (
    <Row justify="center">
      <Col className="LayoutText" xs={24} sm={24} md={24} lg={14} xl={14} xxl={14}>
        <p>
          <Badge status="success" />
          Formas de pago
          <Button type="default" icon={<DownloadOutlined />}>Ticket de Pago</Button>
          <br />
          SALDO
          <br />
          $10,000.00 MX
          <br />
          Tú saldo abonado actualmente.
          <br />
          Tiempo de cobertura en el servicio:
          <CountDown finishDate={finishDate as unknown as number} />
          <br />
          <span>Sú sitio sera borrado en caso de no contar con el pago de cobertura.</span>
          <br />
          <span>Fecha limite de pago: 30/01/2022</span>
          <br />
          Adeudo anual: $50,000 MX
          <br />
          Adeudo mensual:S/N
          <br />
          Fecha de pago: 20/09/2021
          <br />
          Abono a cobertura: $10,000
          <br />
          Fecha de corte: 30/01/2022
          <br />
          Estatus: Favorable
          <br />
          Descargar.
          <DownloadOutlined style={{ fontSize: '30px' }} />
        </p>
      </Col>
    </Row>
  );
}
