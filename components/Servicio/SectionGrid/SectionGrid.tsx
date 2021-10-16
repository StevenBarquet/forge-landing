// ---Dependencys
import { ReactElement } from 'react';
// ----------------------------------------COMPONENT----------------------------------------
import Botoncitos from 'Comp/Servicio/SectionGrid/SectionGridBoton';

export default function SectionGrid(): ReactElement {
  return (
    <div>
      <ul className="Seccion_3">
        <div>
          <li className="Seccion_3_item_1">
            <span className="Seccion_3_item_text">
              TECNOLOGIAS DE DESARROLLO
            </span>
            {/* <span className="Seccion_3_item_text_hover">
              TECNOLOGIAS DE DESARROLLO
            </span> */}
          </li>
          <Botoncitos />
        </div>
        <div>
          <li className="Seccion_3_item_2">
            <span className="Seccion_3_item_text">DISEÑO WEB</span>
          </li>
          <Botoncitos />
        </div>
        <div>
          <li className="Seccion_3_item_3">
            <span className="Seccion_3_item_text">DESARROLLO DE SOFTWARE</span>
          </li>
          <Botoncitos />
        </div>
        <div>
          <li className="Seccion_3_item_4">
            <span className="Seccion_3_item_text">BACKEND</span>
          </li>
          <Botoncitos />
        </div>
        <div>
          <li className="Seccion_3_item_5">
            <span className="Seccion_3_item_text">FRONTEND</span>
          </li>
          <Botoncitos />
        </div>
        <div>
          <li className="Seccion_3_item_6">
            <span className="Seccion_3_item_text">INFRAESTRUCTURA</span>
          </li>
          <Botoncitos />
        </div>
        <div>
          <li className="Seccion_3_item_7">
            <span className="Seccion_3_item_text">
              QA(aseguramiento de calidad)
            </span>
          </li>
          <Botoncitos />
        </div>
        <div>
          <li className="Seccion_3_item_8">
            <span className="Seccion_3_item_text">DEVOPS</span>
          </li>
          <Botoncitos />
        </div>
        <div>
          <li className="Seccion_3_item_9">
            <span className="Seccion_3_item_text">TESTING</span>
          </li>
          <Botoncitos />
        </div>
        <div>
          <li className="Seccion_3_item_10">
            <span className="Seccion_3_item_text">AUTOMATED</span>
          </li>
          <Botoncitos />
        </div>
        <div>
          <li className="Seccion_3_item_11">
            <span className="Seccion_3_item_text">METODOLOGIAS AGILES</span>
          </li>
          <Botoncitos />
        </div>
        <div>
          <li className="Seccion_3_item_12">
            <span className="Seccion_3_item_text">
              SERVICIOS ESPECIALIZADOS
            </span>
          </li>
          <Botoncitos />
        </div>
      </ul>
    </div>
  );
}
