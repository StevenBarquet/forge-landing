// ---Dependencys
import { ReactElement } from 'react';
// ---Others
import { genericAlt } from 'Others/globalData';

// ----------------------------------------COMPONENT----------------------------------------
export default function Rigth(): ReactElement {
  return (
    <div className="Servicesimg-section-1">
      <div className="image-front">
        <img
          className="imagen1"
          src="/images/Services/img-1.jpeg" // Route of the image file
          alt={genericAlt}
        />
      </div>
      <div className="image-back-top">
        <img
          className="imagen2"
          src="/images/Services/img-2.jpeg" // Route of the image file
          alt={genericAlt}
        />
      </div>
    </div>
  );
}
