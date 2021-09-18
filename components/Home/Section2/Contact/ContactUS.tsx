// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
import { FacebookFilled, WhatsAppOutlined, MailOutlined } from '@ant-design/icons';
// ---Other
import { ownerData } from 'Others/global-config';
// ----------------------------------------COMPONENT----------------------------------------
export default function ContactUS(): ReactElement {
  return (
    <>
      <h2>
        ¡Contáctanos!
      </h2>
      <Row justify="center">
        <Col className="contact-sticker" span={24}>
          <section><FacebookFilled /></section>
          <p>{ownerData.title.shortStoreName}</p>
        </Col>
        <Col className="contact-sticker" span={24}>
          <section><WhatsAppOutlined /></section>
          <p>{ownerData.phoneStr}</p>
        </Col>
        <Col className="contact-sticker" span={24}>
          <section><MailOutlined /></section>
          <p>{ownerData.contactMail}</p>
        </Col>
      </Row>
    </>
  );
}
