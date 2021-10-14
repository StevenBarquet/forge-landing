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
const { SubMenu } = Menu;
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
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
          <SubMenu key="sub1" title="PROYECTOS" icon={<ApiOutlined />}>
            <Menu.ItemGroup key="g1" title="Cantidad de proyectos:">
              <Menu.Item>4</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="Pago Mensual por proyecto:">
              <Menu.Item>$1,250</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g3" title="Pago Mensual Total:">
              <Menu.Item>$5,000</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g4" title="Pago anual Total:">
              <Menu.Item>$60,000</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="1" icon={<VideoCameraOutlined />}>
            STEVEDEBOTS
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreAddOutlined />}>
            SHELLY
          </Menu.Item>
          <Menu.Item key="3" icon={<AppstoreAddOutlined />}>
            FORGE
          </Menu.Item>
          <Menu.Item key="4" icon={<AppstoreAddOutlined />}>
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
