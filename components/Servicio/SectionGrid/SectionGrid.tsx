// ---Dependencys
import { ReactElement } from 'react';
import { Row } from 'antd';
// ---Comps
import CardSteven from 'Comp/Servicio/SectionGrid/CardSteven';
import SeccionGridCards from 'Comp/Servicio/SectionGrid/SeccionGridCards';

// ----------------------------------------COMPONENT----------------------------------------
export default function SectionGrid(): ReactElement {
  // --------------------- Const, Hooks, States -------------
  const grid = {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 8,
    xl: 8,
    xxl: 6
  };
  // --------------------- Render -------------
  return (
    <>
      <Row>
        <CardSteven label="TECNOLOGIAS DE DESARROLLO" imgRoute="/images/Services/img/item1.jpeg" grid={grid} />
        <CardSteven label="DISEÑO WEB" imgRoute="/images/Services/img/item2.jpeg" grid={grid} />
        <CardSteven label="DESARROLLO DE SOFWARE" imgRoute="/images/Services/img/item3.jpeg" grid={grid} />
        <CardSteven label="BACKEND" imgRoute="/images/Services/img/item4.jpeg" grid={grid} />
        <CardSteven label="FRONTEND" imgRoute="/images/Services/img/item5.jpeg" grid={grid} />
        <CardSteven label="INFRAESTRUCTURA" imgRoute="/images/Services/img/item6.jpeg" grid={grid} />
        <CardSteven label="QA(aseguramiento de calidad)" imgRoute="/images/Services/img/item7.jpeg" grid={grid} />
        <CardSteven label="DEVOPS" imgRoute="/images/Services/img/item8.jpeg" grid={grid} />
        <CardSteven label="TESTING" imgRoute="/images/Services/img/item9.jpeg" grid={grid} />
        <CardSteven label="AUTOMATED TESTING" imgRoute="/images/Services/img/item10.jpeg" grid={grid} />
        <CardSteven label="METODOLOGIAS AGILES" imgRoute="/images/Services/img/item11.jpeg" grid={grid} />
        <CardSteven label="SERVICIOS ESPECIALIZADOS" imgRoute="/images/Services/img/item12.jpeg" grid={grid} />
      </Row>

      <div>
        <ul className="seccion-3">
          <SeccionGridCards label="TECNOLOGIAS DE DESARROLLO" ccsstyle="seccion-3-1" />
          <SeccionGridCards label="DISEÑO WEB" ccsstyle="seccion-3-2" />
          <SeccionGridCards label="DESARROLLO DE SOFWARE" ccsstyle="seccion-3-3" />
          <SeccionGridCards label="BACKEND" ccsstyle="seccion-3-4" />
          <SeccionGridCards label="FRONTEND" ccsstyle="seccion-3-5" />
          <SeccionGridCards label="INFRAESTRUCTURA" ccsstyle="seccion-3-6" />
          <SeccionGridCards label="QA(aseguramiento de calidad)" ccsstyle="seccion-3-7" />
          <SeccionGridCards label="DEVOPS" ccsstyle="seccion-3-8" />
          <SeccionGridCards label="TESTING" ccsstyle="seccion-3-9" />
          <SeccionGridCards label="AUTOMATED TESTING" ccsstyle="seccion-3-10" />
          <SeccionGridCards label="METODOLOGIAS AGILES" ccsstyle="seccion-3-11" />
          <SeccionGridCards label="SERVICIOS ESPECIALIZADOS" ccsstyle="seccion-3-12" />
        </ul>
      </div>
    </>
  );
}
