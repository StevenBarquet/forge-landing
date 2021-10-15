// ---Dependencys
import { ReactElement } from 'react';
import {
  Layout
} from 'antd';
import SaldoContent from 'Comp/Saldo/SaldoContent';
// ---Component
const {
  Footer, Content, Sider
} = Layout;
// --------------------------------------PROPS-----------------------
// --------------------------------------COMPONENTE-----------------------
export default function SaldoMain(): ReactElement {
  return (
    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Content><SaldoContent /></Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}
