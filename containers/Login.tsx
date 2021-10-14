// ---Dependencys
import { ReactElement } from 'react';
import {
  Layout, Menu, Card, Avatar
} from 'antd';
import {
  AppstoreAddOutlined,
  VideoCameraOutlined,
  ApiOutlined
} from '@ant-design/icons';
// ---Component
import LoginText from 'Comp/Login/LoginText';

const { Meta } = Card;
const { Content, Sider } = Layout;

// --------------------------------------PROPS-----------------------
// --------------------------------------COMPONENTE-----------------------
export default function Login(): ReactElement {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        width="400"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['5']}>
          <Card>
            <Meta
              avatar={(
                <Avatar
                  size={{
                    xs: 24,
                    sm: 32,
                    md: 40,
                    lg: 64,
                    xl: 80,
                    xxl: 100
                  }}
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
              )}
              title="Nombre Del Usuario"
              description="Usuario"
            />
          </Card>
          <Menu.Item key="1" icon={<ApiOutlined />}>
            PROYECTOS
            {/* Cantidad de proyectos: 4
              <br />
              Pago Mensual por proyecto:$1,250
              <br />
              Pago Mensual Total: $5,000
              <br />
              Pago anual Total: $60,000
              <br /> */}
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            STEVEDEBOTS
          </Menu.Item>
          <Menu.Item key="3" icon={<AppstoreAddOutlined />}>
            SHELLY
          </Menu.Item>
          <Menu.Item key="4" icon={<AppstoreAddOutlined />}>
            FORGE
          </Menu.Item>
          <Menu.Item key="5" icon={<AppstoreAddOutlined />}>
            SPACE
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content>
          <div
            className="site-layout-background"
          >
            <LoginText />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
