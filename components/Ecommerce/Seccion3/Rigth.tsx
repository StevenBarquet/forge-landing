// ---Dependencys
import { ReactElement } from 'react';
// ---Others
import { genericAlt } from 'Others/globalData';

// ----------------------------------------COMPONENT----------------------------------------
export default function Rigth(): ReactElement {
  return (
    <div className="img-section-3">
      <div>
        <img
          className="imagen1"
          src="/images/Ecommerce/ecom5.jpeg" // Route of the image file
          alt={genericAlt}
        />
      </div>
    </div>
  );
}
