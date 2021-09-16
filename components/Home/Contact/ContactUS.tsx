// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
import { FacebookFilled, WhatsAppOutlined } from '@ant-design/icons';
// ---Other
import { ownerData } from 'Others/global-config';
// ----------------------------------------COMPONENT----------------------------------------
export default function ContactUS(): ReactElement {
  return (
    <>
      <h2>
        o contáctanos
      </h2>
      <Row justify="center">
        <Col className="contact-sticker" span={6}>
          <section><FacebookFilled /></section>
          <p>{ownerData.title.shortStoreName}</p>
        </Col>
        <Col className="contact-sticker" span={6}>
          <section><WhatsAppOutlined /></section>

          <p>{ownerData.phoneStr}</p>
        </Col>
      </Row>
    </>
  );
}
