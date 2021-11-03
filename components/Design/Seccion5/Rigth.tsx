// ---Dependencys
import { ReactElement } from 'react';
// ---Others
import { genericAlt } from 'Others/globalData';

// ----------------------------------------COMPONENT----------------------------------------
export default function Rigth(): ReactElement {
  return (
    <div className="img-section-5">
      <div>
        <img
          className="imagen"
          src="/images/Design/Design7.png" // Route of the image file
          alt={genericAlt}
        />
      </div>
    </div>
  );
}
