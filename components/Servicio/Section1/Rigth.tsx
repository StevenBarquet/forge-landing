// ---Dependencys
import { ReactElement } from 'react';
// ---Others
import { genericAlt } from 'Others/globalData';

// ----------------------------------------COMPONENT----------------------------------------
export default function Rigth(): ReactElement {
  return (
    <div className="servicesimg-section-1">
      <div>
        <img
          className="imagen1"
          src="/images/Services/img-1.jpeg" // Route of the image file
          alt={genericAlt}
        />
      </div>
      <div>
        <img
          className="imagen2"
          src="/images/Services/img-2.jpeg" // Route of the image file
          alt={genericAlt}
        />
      </div>
    </div>
  );
}
