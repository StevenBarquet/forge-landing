// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ---Comps
import CoursesCard from 'components/Courses/Seccion2/CoursesCard';

// ----------------------------------------COMPONENT----------------------------------------
export default function Left({ isMovil } : { isMovil: boolean}): ReactElement {
  return (
    <div className="section-2">
      <Row justify="center">
        <Col span={24}>
          <h1>CURSOS GRATUITOS </h1>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <CoursesCard imgRoute="/images/Courses/Courses2.jpeg" text1="Forge - Como Tener mi pagina web" text2="VER LISTA DE REPRODUCCIÓN COMPLETA" isMovil={isMovil} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <CoursesCard imgRoute="/images/Courses/Courses3.jpeg" text1="Forge - Como Tener mi pagina web" text2="VER LISTA DE REPRODUCCIÓN COMPLETA" isMovil={isMovil} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <CoursesCard imgRoute="/images/Courses/Courses3.jpeg" text1="Forge - Como Tener mi pagina web" text2="VER LISTA DE REPRODUCCIÓN COMPLETA" isMovil={isMovil} />
        </Col>
      </Row>
    </div>
  );
}
