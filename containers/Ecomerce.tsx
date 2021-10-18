// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ---Components
import Sec1 from 'Comp/Ecomerce/Seccion1/Left';
import Sec2Left from 'Comp/Ecomerce/Seccion2/Left';
import Sec2Rigth from 'Comp/Ecomerce/Seccion2/Rigth';
import Sec3Left from 'Comp/Ecomerce/Seccion3/Left';
import Sec3Rigth from 'Comp/Ecomerce/Seccion3/Rigth';
import Sec4Left from 'Comp/Home/Section2/Left';
import Sec4Rigth from 'Comp/Home/Section2/Rigth';
import Sec5 from 'Comp/Ecomerce/Seccion4/index';

// ----------------------------------------COMPONENT----------------------------------------
export default function Ecomerce(): ReactElement {
  return (
    <div className="Ecomerce-container">
      <Row justify="space-around" align="middle">
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Sec1 />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Sec2Left />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
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
        </Col>
      </Row>
    </div>
  );
}
