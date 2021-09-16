// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ---Redux
import { useSelector } from 'react-redux';
import { ReduxState } from 'Reducers';
// ---Components
import Section1Text from 'Comp/Home/Section1Text';
import Section1Images from 'Comp/Home/Section1Images';
import Section2Contact from 'Comp/Home/Section2Contact';
import Section2Images from 'Comp/Home/Section2Images';

// ----------------------------------------COMPONENT----------------------------------------
export default function Home(): ReactElement {
  // Redux States
  const { isMovil } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);
  return (
    <div className="home-container">
      <Row justify="center">
        <Col xs={24} sm={24} md={24} lg={14} xl={14} xxl={14}>
          <Section1Text />
        </Col>
        <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={10}>
          <Section1Images isMovil={isMovil} />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} sm={24} md={24} lg={14} xl={14} xxl={14}>
          <Section2Contact />
        </Col>
        <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={10}>
          <Section2Images />
        </Col>
      </Row>
    </div>
  );
}
