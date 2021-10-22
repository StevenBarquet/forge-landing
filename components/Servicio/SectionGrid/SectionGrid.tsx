// ---Dependencys
import { ReactElement } from 'react';
// ----------------------------------------COMPONENT----------------------------------------
import SeccionGridCards from 'Comp/Servicio/SectionGrid/SeccionGridCards';

export default function SectionGrid(): ReactElement {
  return (
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
  );
}
