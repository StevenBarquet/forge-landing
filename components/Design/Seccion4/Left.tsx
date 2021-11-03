// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
import Botoncitos from 'Comp/Services/SectionGrid/SectionGridBoton';
// ----------------------------------------COMPONENT----------------------------------------
export default function Left(): ReactElement {
  return (
    <Row>
      <Col>
        <section className="section-4">
          <h1>¿Por que contratar un especialista en el tema?</h1>
          <p>Olvidate del prueba y error. </p>
          <p>
            Deja a un lado preciones, los problemas, contratiempos que puedas
            llegar a tener, deja queprofesional del diseño web ponga a tu
            disposición su experiencia en el sector, lo que se traduce en
            amplios conocimientos de lo que funciona y lo que no. Usando las
            Últimas tendencias, aplicando un gran diseño profesional dejando de
            lado los problemas técnicos.
          </p>
          <Botoncitos namebutton="Contactar un especialista" />
        </section>
      </Col>
    </Row>
  );
}
