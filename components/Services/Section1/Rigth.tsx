// ---Dependencys
import { ReactElement } from 'react';
// ---Others
import { genericAlt } from 'Others/globalData';

// ----------------------------------------COMPONENT----------------------------------------
export default function Rigth({ isMovil } : { isMovil: boolean }): ReactElement {
  return (
    <div className="img-section-1">
      <div>
        <img
          className={isMovil ? 'imagen1mov' : 'imagen1'}
          src="/images/Services/img-1.jpeg" // Route of the image file
          alt={genericAlt}
        />
      </div>
      <div>
        <img
          className={isMovil ? 'imagen2mov' : 'imagen2'}
          src="/images/Services/img-2.jpeg" // Route of the image file
          alt={genericAlt}
        />
      </div>
    </div>
  );
}
