// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ---Components
import Sec1Left from 'Comp/Courses/Seccion1/Left';
import Sec1Rigth from 'Comp/Courses/Seccion1/Rigth';
// ----------------------------------------COMPONENT----------------------------------------
export default function Courses(): ReactElement {
  return (
    <div className="courses-container">
      <Row justify="space-around" align="middle">
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Sec1Left />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Sec1Rigth />
        </Col>
        {/*  <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Sec2Rigth />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
          <Sec3Left />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
          <Sec3Rigth />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Sec4Left />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Sec4Rigth />
        </Col>
        <Col span={24}>
          <Sec5 />
        </Col> */}
      </Row>
    </div>
  );
}
