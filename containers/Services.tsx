// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ---Components
import Sec1Left from 'Comp/Services/Section1/Left';
import Sec1Rigth from 'Comp/Services/Section1/Rigth';
import Sec2Left from 'Comp/Services/Section2/Left';
import Sec2Rigth from 'Comp/Services/Section2/Rigth';
import SectionGrid from 'Comp/Services/SectionGrid';

// ----------------------------------------COMPONENT----------------------------------------
export default function Servicio(): ReactElement {
  return (
    <div className="services-container">
      <Row justify="space-around" align="middle">
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Sec1Left />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Sec1Rigth />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Sec2Left />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Sec2Rigth />
        </Col>
        <SectionGrid />
      </Row>
    </div>
  );
}
