// ---Dependencys
import { ReactElement } from 'react';
import {
  Row, Col, Divider
} from 'antd';
import CountDown from 'CComps/InDevPage/CountDown';
import { DownloadOutlined } from '@ant-design/icons';
// --------------------------------------PROPS-----------------------
// --------------------------------------COMPONENTE-----------------------
import SaldoBoton from 'Comp/Saldo/SaldoBoton';

const finishDate = new Date('October 9, 2021 03:24:00');

export default function SaldoContent(): ReactElement {
  return (
    <Row justify="center">
      <Col className="SaldoLayoutText" xs={24} sm={24} md={24} lg={14} xl={14} xxl={14}>
        <SaldoBoton />
        <p>
          <h1>SALDO</h1>
          <h2>$10,000.00 MX</h2>
          <Divider />
          <h3>Tú saldo abonado actualmente.</h3>
          <h4>Tiempo de cobertura en el servicio:</h4>
          <CountDown className="ContadorLayoutText" finishDate={finishDate as unknown as number} isMovil={false} />
          <br />
          <span>
            Sú sitio sera borrado en caso de no contar con el pago de cobertura.
            <br />
            Fecha limite de pago: 30/01/2022
          </span>
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
