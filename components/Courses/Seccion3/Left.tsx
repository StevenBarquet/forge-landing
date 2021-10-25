// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ---Comps
import CoursesCard from 'components/Courses/Seccion2/CoursesCard';
import Botoncitos from 'Comp/Services/SectionGrid/SectionGridBoton';

// ----------------------------------------COMPONENT----------------------------------------
export default function Left({ isMovil } : { isMovil: boolean}): ReactElement {
  return (
    <div className="section-3">
      <Row justify="center">
        <Col span={24}>
          <h1>NUESTROS CURSOS PREMIUM</h1>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <CoursesCard
            imgRoute="/images/Courses/Courses4.jpeg"
            text1="Curso de intensivo de Disño UX?Ui"
            text2=""
            isMovil={isMovil}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <CoursesCard
            imgRoute="/images/Courses/Courses5.jpeg"
            text1="Curso de programcion de videojuegos"
            text2=""
            isMovil={isMovil}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <CoursesCard
            imgRoute="/images/Courses/Courses6.jpeg"
            text1="Curso de REACT.JS"
            text2=""
            isMovil={isMovil}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
          <section className="section-3-1">
            <h2> ¿Por que obtener un servicio premium?</h2>
            <li>Más de 600 cursos para crear y adquirir tus habilidades deseadas.</li>
            <li>Contenido actualizado, nuevos cursos, blog posts y podcasts.</li>
            <li>Profesores certificados</li>
            <li>Diplomas de certificación físicos de las Escuelas aprobadas.</li>
            <br />
            <h2>
              Sí deseas aprender aun más no dudes en conseguir nuestro curso
              premium con el 30% de desuento para nuestros clientes Registrados
            </h2>
          </section>
        </Col>
        <Col span={24}>
          <Row justify="center">
            <Botoncitos namebutton="OBTENER" />
            <Botoncitos namebutton="INFORMES" />
          </Row>
        </Col>
      </Row>
    </div>
  );
}
