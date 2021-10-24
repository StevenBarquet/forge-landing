// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ---Components
import Sec1Left from 'Comp/Courses/Seccion1/Left';
import Sec1Rigth from 'Comp/Courses/Seccion1/Rigth';
import Sec2Left from 'Comp/Courses/Seccion2/Left';
import Sec3Left from 'Comp/Courses/Seccion3/Left';

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
        <Col>
          <Sec2Left />
        </Col>
        <Col>
          <Sec3Left />
        </Col>
      </Row>
    </div>
  );
}
