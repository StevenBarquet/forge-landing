// ---Dependencys
import { ReactElement } from 'react';
// ---Others
import { genericAlt } from 'Others/globalData';

// ----------------------------------------COMPONENT----------------------------------------
export default function Rigth(): ReactElement {
  return (
    <div className="img-section-2">
      <div>
        <img
          className="imagen1"
          src="/images/Ecommerce/ecom2.jpeg" // Route of the image file
          alt={genericAlt}
        />
      </div>
      <div>
        <img
          className="imagen2"
          src="/images/Ecommerce/ecom3.jpeg" // Route of the image file
          alt={genericAlt}
        />
      </div>
      <div>
        <img
          className="imagen3"
          src="/images/Ecommerce/ecom4.jpeg" // Route of the image file
          alt={genericAlt}
        />
      </div>
    </div>
  );
}
