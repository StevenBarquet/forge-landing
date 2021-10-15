// ---Dependencys
import { ReactElement } from 'react';
import {
  Layout
} from 'antd';
// ---Component
import SaldoContent from 'Comp/Saldo/SaldoContent';
import SaldoSider from 'Comp/Saldo/SaldoSider';

const {
  Footer, Content, Sider
} = Layout;
// --------------------------------------PROPS-----------------------
// --------------------------------------COMPONENTE-----------------------
export default function SaldoMain(): ReactElement {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        width="261"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <SaldoSider />
      </Sider>
      <Layout>
        <Content><SaldoContent /></Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}
