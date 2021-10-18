/* eslint-disable jsx-a11y/no-static-element-interactions */
// ---Dependencys
import { Menu, Dropdown, Anchor } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { ReactElement } from 'react';

const { Link } = Anchor;
const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link href="https://www.aliyun.com" title="E-commerce" />
    </Menu.Item>
    <Menu.Item key="1">
      <Link href="https://www.aliyun.com" title="Pagina Web" />
    </Menu.Item>
  </Menu>
);
// -----------------------------------COMPONENT------------------------------------

export default function NavDropMau(): ReactElement {
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        Crea
        <DownOutlined />
      </a>
    </Dropdown>
  );
}
