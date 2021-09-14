// ---Dependencys
import React, { useState, ReactElement } from 'react';
import { MenuFoldOutlined, MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Row, Col } from 'antd';
// ---Components
import NavButton from 'Comp/NavBar/NavbarItems/NavButton';
// ---Others
// import { appConfig } from 'Others/global-config';

// ---AUX COMPONENTS
interface AuxProps1 {
  currentPath: string;
}
function JustButtons(props: AuxProps1) {
  const { currentPath } = props;
  const grid = {
    xs: 24,
    sm: 24,
    md: 8,
    lg: 8,
    xl: 8,
    xxl: 8
  };
  return (
    <>
      <NavButton label="Crea" path="/" currentPath={currentPath} grid={grid} />
      <NavButton label="Servicios" path="/AntdExPage" currentPath={currentPath} grid={grid} />
      <NavButton label="Asesorias técnicas" path="/ReduxExPage" currentPath={currentPath} grid={grid} />
    </>
  );
}
// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  isMovil: boolean;
  logo: string;
  currentPath: string;
}
// ------------------------------------------ COMPONENT-----------------------------------------
function ClientMenu(props: Props) : ReactElement {
  const { isMovil, logo, currentPath } = props;
  const [menuVisible, setMenuVisible] = useState(false);

  function changeMenuVisibility() {
    setMenuVisible(!menuVisible);
  }
  if (isMovil) {
    return (
      <Row className="nav-div">
        <Col xs={24} sm={24} lg={6}>
          <Link href="/" passHref>
            <div className="to-home">
              <a href="replace">
                <img src={logo} alt="Shelly" width="100%" />
              </a>
            </div>
          </Link>
        </Col>
        <Col xs={24} sm={24} lg={12}>
          <Row>
            <Col xs={24} sm={24} lg={5}>
              <div
                className="nav-btn"
                onClick={changeMenuVisibility}
                role="button"
                tabIndex={0}
              >
                {menuVisible ? <MenuFoldOutlined /> : <MenuOutlined />}
              </div>
            </Col>
            {menuVisible ? <JustButtons currentPath={currentPath} /> : null}
          </Row>
        </Col>
      </Row>
    );
  }
  return (
    <Row className="nav-div">
      <Col xs={24} sm={24} lg={6}>
        <Link href="/">
          <div className="to-home">
            <img src={logo} alt="Shelly" width="100%" />
          </div>
        </Link>
      </Col>
      <Col xs={24} sm={24} lg={12}>
        <Row>
          <JustButtons currentPath={currentPath} />
        </Row>
      </Col>
    </Row>
  );
}

export default ClientMenu;
