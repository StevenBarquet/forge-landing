// ---Dependencys
import { ReactElement } from 'react';
import { UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Col, ColProps } from 'antd';

// ------------------------------------TYPES---------------------------------------
interface Props {
  path: string;
  currentPath: string;
  grid: ColProps
}
// -----------------------------------COMPONENT------------------------------------
export default function NavButtonLogIn(props: Props): ReactElement {
  const {
    grid, path, currentPath
  } = props;
  const {
    xs, sm, md, lg, xl, xxl
  } = grid;

  return (
    <Col className="nav-col" xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      <Link href={path}>
        <div
          className={currentPath === path ? 'nav-btn nav-border' : 'nav-btn'}
        >
          <UserOutlined />
          Iniciar sesión
        </div>
      </Link>
      <div className="slider" />
    </Col>
  );
}
