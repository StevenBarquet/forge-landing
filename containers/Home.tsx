// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ---Components
import Section1Text from 'components/Home/Section1Text';
import Section1Images from 'components/Home/Section1Images';

// ----------------------------------------COMPONENT----------------------------------------
export default function Home(): ReactElement {
  return (
    <div className="home-container">
      <Row justify="center">
        <Col xs={24} sm={24} md={24} lg={14} xl={14} xxl={14}>
          <Section1Text />
        </Col>
        <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={10}>
          <Section1Images />
        </Col>
      </Row>
    </div>
  );
}
