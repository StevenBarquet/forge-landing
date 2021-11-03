// ---Dependencys
import { ReactElement } from 'react';
import {
  Row, Col, Avatar, Image
} from 'antd';
// ---Component

// --------------------------------------PROPS-----------------------
// --------------------------------------COMPONENTE-----------------------
export default function SaldoSider(): ReactElement {
  return (
    <Row justify="center">
      <Col xs={24} sm={24} md={24} lg={14} xl={14} xxl={14}>
        <img src="/images/forge-sm-web.png" alt="Shelly" width="100%" />
        <Avatar
          size={{
            xs: 80, sm: 80, md: 90, lg: 90, xl: 100, xxl: 110
          }}
          src={<Image src="https://images3.alphacoders.com/112/1126231.png" />}
        />
        <h1>STEVEN BARQUET MENDEZ.</h1>
        <h2 className="saldos-subtitulos">PROYECTOS</h2>
        <p className="saldos-texto">
          Cantidad de proyectos: 4
          Pago Mensual por proyecto:$1,250
          Pago Mensual Total: $5,000
          Pago anual Total: $60,000
        </p>
        <h1>
          STEVEDEBOTS
          SHELLY
          FORGE
          SPACE
        </h1>
        <h2 className="saldos-subtitulos">COMPROBANTES.</h2>
        <h2 className="saldos-subtitulos">AYUDA.</h2>
      </Col>
    </Row>
  );
}
