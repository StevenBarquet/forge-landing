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
          className="imagen3"
          src="/images/Design/Design3.png" // Route of the image file
          alt={genericAlt}
        />
      </div>
    </div>
  );
}
