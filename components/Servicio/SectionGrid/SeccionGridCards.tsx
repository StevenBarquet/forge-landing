// ---Dependencys
import { ReactElement } from 'react';
// ----------------------------------------COMPONENT----------------------------------------
import Botoncitos from 'Comp/Servicio/SectionGrid/SectionGridBoton';

export default function SeccionGridCards(props:{label:string, ccsstyle:string}): ReactElement {
  const { label, ccsstyle } = props;
  return (
    <div>
      <li className={ccsstyle}>
        <span className="seccion-3-item-text">
          {label}
        </span>
      </li>
      <Botoncitos />
    </div>
  );
}
