// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ---Components
import Sec1Left from 'Comp/Design/Seccion1/Left';
import Sec1Rigth from 'Comp/Design/Seccion1/Rigth';
import Sec2Left from 'Comp/Design/Seccion2/Left';
import Sec2Rigth from 'Comp/Design/Seccion2/Rigth';
import Sec3Left from 'Comp/Design/Seccion3/Left';
import Sec4Left from 'Comp/Design/Seccion4/Left';
import Sec4Rigth from 'Comp/Design/Seccion4/Rigth';
import Sec5Left from 'Comp/Design/Seccion5/Left';
import Sec5Rigth from 'Comp/Design/Seccion5/Rigth';
import Sec6Left from 'Comp/Design/Seccion6/Left';
import Sec6Rigth from 'Comp/Design/Seccion6/Rigth';

// ----------------------------------------COMPONENT----------------------------------------
export default function Design(): ReactElement {
  return (
    <div className="design-container">
      <Row justify="space-around" align="middle">
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Sec1Left />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Sec1Rigth />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
          <Sec2Left />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
          <Sec2Rigth />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Sec3Left />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Sec4Left />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Sec4Rigth />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Sec5Left />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Sec5Rigth />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Sec6Left />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Sec6Rigth />
        </Col>
      </Row>
    </div>
  );
}
