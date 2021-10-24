// ---Dependencys
import { ReactElement } from 'react';
// ---Others
import { genericAlt } from 'Others/globalData';

// ----------------------------------------COMPONENT----------------------------------------
export default function Rigth(): ReactElement {
  return (
    <div className="img-section-1">
      <div>
        <img
          className="imagen1"
          src="/images/Design/Design1.jpeg" // Route of the image file
          alt={genericAlt}
        />
      </div>
      <div>
        <img
          className="imagen2"
          src="/images/Design/Design2.jpeg" // Route of the image file
          alt={genericAlt}
        />
      </div>
    </div>
  );
}
