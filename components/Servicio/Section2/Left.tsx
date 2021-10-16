// ---Dependencys
import { ReactElement } from 'react';
// ---Others
import { genericAlt } from 'Others/globalData';

// ----------------------------------------COMPONENT----------------------------------------
export default function Rigth(): ReactElement {
  return (
    <div className="Servicesimg-section-2">
      <div className="image-front">
        <img
          className="imagen3"
          src="/images/Services/img-3.jpeg" // Route of the image file
          alt={genericAlt}
        />
      </div>
    </div>
  );
}
