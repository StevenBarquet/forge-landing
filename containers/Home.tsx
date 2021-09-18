// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ---Redux
import { useSelector } from 'react-redux';
import { ReduxState } from 'Reducers';
// ---Components
import Sec1Left from 'Comp/Home/Section1/Left';
import Sec1Rigth from 'Comp/Home/Section1/Rigth';
import Sec2Left from 'Comp/Home/Section2/Left';
import Sec2Rigth from 'Comp/Home/Section2/Rigth';
import Sec3Left from 'Comp/Home/Section3/Left';
import Sec3Rigth from 'Comp/Home/Section3/Rigth';
import Sec4Left from 'Comp/Home/Section4/Left';
import Sec4Rigth from 'Comp/Home/Section4/Rigth';
import Sec5Left from 'Comp/Home/Section5/Left';
import Sec5Rigth from 'Comp/Home/Section5/Rigth';
import Sec6Left from 'Comp/Home/Section6/Left';
import Sec6Rigth from 'Comp/Home/Section6/Rigth';
import Section7 from 'Comp/Home/Section7';

// ----------------------------------------COMPONENT----------------------------------------
export default function Home(): ReactElement {
  // Redux States
  const { isMovil } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);
  return (
    <div className="home-container">
      <Row justify="center">
        <Col xs={24} sm={24} md={24} lg={14} xl={14} xxl={14}>
          <Sec1Left />
        </Col>
        <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={10}>
          <Sec1Rigth isMovil={isMovil} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={14} xl={14} xxl={14}>
          <Sec2Left />
        </Col>
        <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={10}>
          <Sec2Rigth />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Sec3Left isMovil={isMovil} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Sec3Rigth />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Sec4Left />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Sec4Rigth isMovil={isMovil} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Sec5Left isMovil={isMovil} />
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
        <Col span={24}>
          <Section7 />
        </Col>
      </Row>
    </div>
  );
}
