// ---Dependencys
import { ReactElement } from 'react';
// ---Others
import { genericAlt } from 'Others/globalData';

// ----------------------------------------COMPONENT----------------------------------------
export default function Rigth(): ReactElement {
  return (
    <div className="img-section-6">
      <div>
        <img
          className="imagen1"
          src="/images/Design/Design4.jpeg" // Route of the image file
          alt={genericAlt}
        />
      </div>
      <div>
        <img
          className="imagen2"
          src="/images/Design/Design5.jpeg" // Route of the image file
          alt={genericAlt}
        />
      </div>
      <div>
        <img
          className="imagen3"
          src="/images/Design/Design6.jpeg" // Route of the image file
          alt={genericAlt}
        />
      </div>
    </div>
  );
}
