// ---Dependencys
import React, { useState, ReactElement } from 'react';
import { MenuFoldOutlined, MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Row, Col } from 'antd';
// ---Components
import NavButton from 'Comp/NavBar/NavbarItems/NavButton';
import NavButtonLogIn from 'Comp/NavBar/NavbarItems/NavButtonLogIn';
// ---Others
// import { appConfig } from 'Others/global-config';
// style={{ backgroundColor: 'greenyellow' }}

// ---AUX COMPONENTS
function JustButtons(props: { currentPath: string }) {
  const { currentPath } = props;
  const navGrid = {
    xs: 24,
    sm: 24,
    md: 4,
    lg: 4,
    xl: 4,
    xxl: 4
  };
  const logInGrid = {
    xs: 24,
    sm: 24,
    md: { offset: 4, span: 4 },
    lg: { offset: 4, span: 4 },
    xl: { offset: 4, span: 4 },
    xxl: { offset: 4, span: 4 }
  };
  return (
    <Row>
      <NavButton label="Crea" path="/" currentPath={currentPath} grid={navGrid} />
      <NavButton
        label="Servicios"
        path="/AntdExPage"
        currentPath={currentPath}
        grid={navGrid}
      />
      <NavButton
        label="Asesorias técnicas"
        path="/ReduxExPage"
        currentPath={currentPath}
        grid={navGrid}
      />
      <NavButtonLogIn
        path="/LoginPage"
        currentPath={currentPath}
        grid={logInGrid}
      />
      <NavButton
        label="Ayuda"
        path="/HelpPage"
        currentPath={currentPath}
        grid={navGrid}
      />
    </Row>
  );
}
interface OtherProps {
  currentPath: string;
  menuVisible: boolean;
  setMenuVisible: (arg: boolean) => void;
}
function MovilMenu(props: OtherProps) {
  const { menuVisible, setMenuVisible, currentPath } = props;
  return (
    <Row>
      <Col span={24}>
        <button
          className="nav-btn"
          onClick={() => setMenuVisible(!menuVisible)}
          type="button"
        >
          {menuVisible ? <MenuFoldOutlined /> : <MenuOutlined />}
        </button>
      </Col>
      <Col span={24}>
        {menuVisible ? <JustButtons currentPath={currentPath} /> : null}
      </Col>
    </Row>
  );
}
// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  isMovil: boolean;
  logo: string;
  currentPath: string;
}
// ------------------------------------------ COMPONENT-----------------------------------------
export default function ClientMenu(props: Props): ReactElement {
  const { isMovil, logo, currentPath } = props;
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <Row className="nav-div">
      <Col xs={24} sm={24} md={4} lg={4} xl={6} xxl={6}>
        <Link href="/" passHref>
          <div className="to-home">
            <a href="replace">
              <img src={logo} alt="Shelly" width="100%" />
            </a>
          </div>
        </Link>
      </Col>
      <Col xs={24} sm={24} md={20} lg={20} xl={18} xxl={18}>
        {isMovil ? (
          <MovilMenu
            currentPath={currentPath}
            menuVisible={menuVisible}
            setMenuVisible={setMenuVisible}
          />
        ) : (
          <JustButtons currentPath={currentPath} />
        )}
      </Col>
    </Row>
  );
}
