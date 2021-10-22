// ---Dependencys
import { ReactElement } from 'react';
// ---Comps
import Cards from 'Comp/Services/SectionGrid/Cards';

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
      <Cards label="TECNOLOGIAS DE DESARROLLO" imgRoute="/images/Services/img/item1.jpeg" grid={grid} />
      <Cards label="DISEÑO WEB" imgRoute="/images/Services/img/item2.jpeg" grid={grid} />
      <Cards label="DESARROLLO DE SOFWARE" imgRoute="/images/Services/img/item3.jpeg" grid={grid} />
      <Cards label="BACKEND" imgRoute="/images/Services/img/item4.jpeg" grid={grid} />
      <Cards label="FRONTEND" imgRoute="/images/Services/img/item5.jpeg" grid={grid} />
      <Cards label="INFRAESTRUCTURA" imgRoute="/images/Services/img/item6.jpeg" grid={grid} />
      <Cards label="QA(aseguramiento de calidad)" imgRoute="/images/Services/img/item7.jpeg" grid={grid} />
      <Cards label="DEVOPS" imgRoute="/images/Services/img/item8.jpeg" grid={grid} />
      <Cards label="TESTING" imgRoute="/images/Services/img/item9.jpeg" grid={grid} />
      <Cards label="AUTOMATED TESTING" imgRoute="/images/Services/img/item10.jpeg" grid={grid} />
      <Cards label="METODOLOGIAS AGILES" imgRoute="/images/Services/img/item11.jpeg" grid={grid} />
      <Cards label="SERVICIOS ESPECIALIZADOS" imgRoute="/images/Services/img/item12.jpeg" grid={grid} />
    </>
  );
}
