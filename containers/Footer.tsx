// ---Dependencys
import { ReactElement } from 'react';
import Image from 'next/image';
import { Row, Col } from 'antd';
import {
  MailOutlined
} from '@ant-design/icons';
// ---CommonComps
import Link from 'CComps/Link';
// ---Other
import { ownerData } from 'Others/global-config';
// ----------------------------------------COMPONENT----------------------------------------
export default function Footer(): ReactElement {
  const grid = {
    xs: 12,
    sm: 12,
    md: 5,
    lg: 4,
    xl: 4,
    xxl: 3
  };
  return (
    <footer>
      <h1>Contáctanos</h1>
      <Row justify="center">
        <Col className="contact-sticker" {...grid}>
          <section>
            <Image
              priority
              src="/images/footer/fb.svg" // Route of the image file
              height={34}
              width={34}
              alt={ownerData.domain}
            />
          </section>
          <p>{ownerData.title.shortStoreName}</p>
        </Col>
        <Col className="contact-sticker" {...grid}>
          <section>
            <Image
              priority
              src="/images/footer/whats.svg" // Route of the image file
              height={34}
              width={34}
              alt={ownerData.domain}
            />
          </section>
          <p>{ownerData.phoneStr}</p>
        </Col>
        <Col className="contact-sticker" {...grid}>
          <section>
            <MailOutlined />
          </section>
          <p>{ownerData.contactMail}</p>
        </Col>
      </Row>
      <h2>
        © 2021 forge my tech, Inc. All Rights Reserved. Did you like this site?
        check
        {' '}
        <Link to="/">{ownerData.domain}</Link>
      </h2>
    </footer>
  );
}
