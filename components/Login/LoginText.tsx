import { ReactElement } from 'react';
import { Layout, Button } from 'antd';
import CountDown from 'CComps/InDevPage/CountDown';
import {
  DownloadOutlined
} from '@ant-design/icons';

const finishDate = new Date('October 9, 2021 03:24:00');
const { Header, Content } = Layout;
export default function LoginText(): ReactElement {
  return (
    <Layout>
      <Header>
        Formas de pago
        <Button>Ticket de Pago</Button>
      </Header>
      <Content className="LayoutText">
        SALDO
        <br />
        $10,000.00 MX
        <br />
        Tú saldo abonado actualmente.
        <br />
        Tiempo de cobertura en el servicio:
        <CountDown finishDate={finishDate as unknown as number} isMovil={false} />
        <br />
        Sú sitio sera borrado en caso de no contar con el pago de cobertura.
        <br />
        Fecha limite de pago: 30/01/2022
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
      </Content>
    </Layout>
  );
}
