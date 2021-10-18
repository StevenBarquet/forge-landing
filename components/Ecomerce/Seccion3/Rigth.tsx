// ---Dependencys
import { ReactElement } from 'react';
// ---Others
import { genericAlt } from 'Others/globalData';

// ----------------------------------------COMPONENT----------------------------------------
export default function Rigth(): ReactElement {
  return (
    <div className="ecomerceimg-section-3">
      <div className="image-front">
        <img
          className="imagen1"
          src="/images/Ecomerce/ecom5.jpeg" // Route of the image file
          alt={genericAlt}
        />
      </div>
    </div>
  );
}
